var editor = ace.edit("jsEditor");
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/javascript");
editor.setFontSize("16px");
editor.setShowPrintMargin(false);
editor.getSession().setTabSize(2);

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var getCurrentExerciseNumber = function(){
    var exerciseFromQueryString = getUrlParameter('exercise');
    return exerciseFromQueryString ? parseInt(exerciseFromQueryString) : 1;
};

$("#previous").on( 'click', function(){
    var currentExerciseNumber  = getCurrentExerciseNumber();
    var previousExerciseNumber = currentExerciseNumber > 1 ? currentExerciseNumber-1 : 1 ;
    window.location.replace( window.location.href.split('?')[0] + "?exercise="+previousExerciseNumber);
});

$("#next").on( 'click', function(){
    var currentExerciseNumber = getCurrentExerciseNumber();
    var nextExerciseNumber    = currentExerciseNumber+1;
    window.location.replace( window.location.href.split('?')[0] + "?exercise="+nextExerciseNumber);
});

var workerFactoy = function( code,  polyfill ){
  var extendedCode    = polyfill + 'try{' + code +'self.postMessage( {eval : accConsoles, error: false} );} catch(e){ self.postMessage( {eval : e.stack, error: true} );}';

  var bb              = new Blob([extendedCode], { type: 'text/javascript' });  // convert the blob into a pseudo URL
  var bbURL           = URL.createObjectURL(bb);
  return new Worker(bbURL);
};

var consolePolyfill = `
var accConsoles='';
var window = {};
window.alert = function(){
    console.log.apply(console, ["Alert: "].concat(Array.prototype.slice.call(arguments)));
};
var alert = window.alert;
var console = {
    log: function(){
        var log = "";
        for(var i = 0; i < arguments.length; i++){
            if ( typeof arguments[i] === "object" && typeof JSON === "object" && typeof JSON.stringify === "function" ) {
                log += '<span class="log-'+typeof arguments[i]+'">'+JSON.stringify(arguments[i], undefined, 2).replace(/"([^"]*)":/g, '$1:')+'</span>'; // object without "" on keys
            }
            else {
                log += '<span class="log-"'+typeof arguments[i]+'">'+arguments[i]+'</span>'; // atom type of variable
            }
            if ( i < arguments.length -1 ){ // do not add a blank to the last parameter of console.log() to be printed
                log += '&nbsp;';
            }
        }
        accConsoles += '<div>'+log+'</div>';
    },
    error: function(){
        console.log.apply(console, ["ERROR: "].concat(Array.prototype.slice.call(arguments)));
    },
    warn: function(){
        console.log.apply(console, ["WARNING: "].concat(Array.prototype.slice.call(arguments)));
    }
};
`
var $feedback       = $("#feedback");
var $interpretor    = $("#interpretor");
var $solutionButton = $('#solution');
var $runButton      = $('#run');
var $assignment     = $('#assignment');
var exerciseNumber  = getCurrentExerciseNumber();
var exerciseLabel   = "exercise_" + exerciseNumber;
var exercise        = null;


/**
* replace variable
*
* @desc    replace a dynamic part in a source code (for cheat detection sake in the autocorrection process)
* @param   {string}                                      - source code
* @param   {object}                                      - variable
* @param   {Array<number|string|Array<string|number>>}   - newValue
* @returns {string}                                      - parsed source code
*/
var replaceVariable = function( code, variable, newValue ) {
    if( variable.type === 'Array' ){
        var stringified = JSON.stringify(newValue);
        var reg = `var ${variable.name} = \\[[^\\]]*]`;
        var re = new RegExp(reg);
        return code.replace( re, `var ${variable.name} = ${stringified};`);
    }
    else if(variable.type === 'number') {
        var reg = `var ${variable.name} = [^;]+;`;
        var re = new RegExp(reg);
        return code.replace( re, `var ${variable.name} = ${newValue};`);
    }
    else { // string
        var reg = `var ${variable.name} = "[^;]+";`;
        var re = new RegExp(reg);
        return code.replace( re, `var ${variable.name} = "${newValue}";`);
    }
};

/**
* replace varibles batch
*
* @desc    replace all dynamic parts in a source code (for cheat detection sake in the autocorrection process)
* @param   {string}                                                    - source code
* @param   {Array<Object>}                                             - variables
* @param   {boolean}                                                   - randomize
* @returns {Array<string, Array<number|string|Array<string|number>>>}  - <parsed source code, new values>
*/
function replaceVariblesBatch( code, variables, randomize ){
    const newValues = [];
    var newCode = variables.reduce( function( memo, currentVariable ){
        if( currentVariable.type === 'number' || currentVariable.type === 'string'){
            var randElement = randomize ? _.sample( currentVariable.values) : currentVariable.values;

            newValues.push( randElement );
            return replaceVariable( memo, currentVariable, randElement);
        }
        else{  // array
            var randRange = randomize ? _.sample( currentVariable.values, Math.ceil(currentVariable.values.length/2) ) : currentVariable.values;
            newValues.push( randRange );
            return replaceVariable( memo, currentVariable, randRange);
        }
    }, code);

    return [newCode, newValues];
}

/**
* replace default values
*
* @desc    modify the values that a variable can originally have (against what we get Backend) (for cheat detection sake in the autocorrection process)
* @param   {Array<Object>}                                             - exerciseVariables
* @param   Array<number|string|Array<number|string>>                   - newValues
* @returns {Array<Object>}                                             - array containing NEW variables object
*/
function replaceDefaultValues( exerciseVariables, newValues ){
    return exerciseVariables.map( function(current, index) { return Object.assign( {}, current, {values : newValues[index]} ); });
}

// load the exercise and populate task text
$.getJSON('exercises.json', function(data) {
    exercise = data[exerciseLabel];
    editor.insert( exercise.skeleton );
    $assignment.html(`<h2>Exercise ${exerciseNumber}</h2> ${exercise.assignment}`);
    $solutionButton.attr('disabled', false);
    $runButton.attr('disabled', false);
    var needle = editor.find("write your code here"); // place the cursor at the place user needs to start writting code
    editor.gotoLine( needle.start.row + 1 );
});

$solutionButton.on( 'click', function(){
    editor.setValue( exercise.solution );
});

$runButton.on( 'click', function(){
    $interpretor.empty();
    $feedback.empty();
    if( window.Worker ){
        var submittedCode       = editor.getValue();
        var submittedCodeNew    = replaceVariblesBatch( submittedCode, exercise.variables, true );
        var solutionCodeNew     = replaceVariblesBatch( exercise.solution, replaceDefaultValues( exercise.variables, submittedCodeNew[1] ), false );

        var studentWorker       = workerFactoy( submittedCode, consolePolyfill );
        studentWorker.addEventListener('message', function(e){

        // parsing error
        if( e.data.error ){
            $feedback.html('<span class="bg-danger">Your code contains bugs</span>');
            $("#interpretor").append(`<div>${e.data.eval}</div>`);
        }
        else{
            var studentCodeParsed = e.data.eval;
            studentWorker.terminate();
            var studentValidationWorker = workerFactoy( submittedCodeNew[0], consolePolyfill ); // parse the submitted code with dynamical replacement
            studentValidationWorker.addEventListener('message', function(e){
                var studentValidatorParsed = e.data.eval;
                studentValidationWorker.terminate();

                var solutionWorker = workerFactoy( solutionCodeNew[0], consolePolyfill ); // parse the solution with dynamical replacement
                solutionWorker.addEventListener('message', function(e){
                    var solutionParsed = e.data.eval;
                    solutionWorker.terminate();

                    if ( studentValidatorParsed === solutionParsed){
                        $feedback.html('<span class="bg-success">Exercise correct</span>');
                    }
                    else{
                        $feedback.html('<span class="bg-warning">Exercise incorrect</span>');
                    }
                    $("#interpretor").append(`<div>${studentCodeParsed}</div>`);
                    });
                });
            } // end of else
        });
    } // end of if worker available
    else{
        $("#feedback").empty().append("<div>Can't work with your current browser</div>");
    }
});

/*
const insertInOrder = function( element, arr ){
if( arr.length === 0){
  return [element];
}
else if( element <= arr[0] ){
  return [element].concat(arr);
}
else{
  return [arr[0]].concat( insertInOrder() );
}
};
console.log( insertInOrder(80, [8,10,111,1111] ) );
*/


/*

"assignment_2" :{
  "task" : "
      Complete the function <code>getAge</code> in order that function to return the age of an individual.

      Then call the function with parameter <code>1984</code> and log the result.
      "
  ,
  "skeleton" : "
      funciton getAge ( birthYear ){

      }
      "
  ,
  "solution" :  "
      function getAge( birthYear ){
          return Math.max( new Date().getFullYear() - birthYear, 0);
      }
      console.log( getAge( 1984 ) );
      "
  ,
  "antiCheat" : "
      var variables = ""
      for (var name in this)
          variables += name + "\n";
      ",
  "antiRegex" : ".+\\b(for)\\b|\\b(map)\\bb|\\b(filter)\\b|\\b(reduce)\\b|\\b(forEach)\\b.+",
}

*/
