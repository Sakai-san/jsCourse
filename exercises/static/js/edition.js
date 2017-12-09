
const solutions = [
  {
    plain : 'exo1.html',
    mini  : 'exo1_minified.html',
    result : 'exercise1.png'
  },
  {
    plain : 'exo2.html',
    mini  : 'exo2_minified.html',
    result : 'exercise2.png'
  },
  {
    plain : 'exo3.html',
    mini  : 'exo3_minified.html',
    result : 'exercise3.png'
  },
  {
    plain : 'exo4.html',
    mini  : 'exo4_minified.html',
    result : 'exercise4.png'
  }
];
let currentExercise = 0;

$(function(){
  const jsEditor         = $("#jsEditor");
  const interpretor       = $("#interpretor");

  const interprete = () => {
    interpretor
    .contents()
    .find("html")
    .html( htmlEditor.val() )
    .end()
    .find("head")
    .append( `<style type='text/css'>${cssEditor.val()}</style>` );
  };

  const registerEvent = (generatedRegex) => {
    [cssEditor, htmlEditor].forEach( (el) => {
      $(el).keyup( (event) => {   // event handler, interprete and review exercise called each time
        interprete();
        reviewExercise( generatedRegex );
      });
    });
  };

  const reviewExercise = (generatedRegex) => {
    const bodyTextExercise = interpretor.contents().find("body").text();
    if( (new RegExp(generatedRegex)).test( bodyTextExercise) ){
      console.log("exercise correct about HTML");
    }
    else{
      console.log("exercise not correct about HTML");
    }
  };

  const switchExercise = (event) => {
    const nbOfExercises = solutions.length;
    if( $(event.target).attr("id") === "next" ){
      currentExercise = (currentExercise + 1) % nbOfExercises;
    }
    else{
      currentExercise = (currentExercise + nbOfExercises-1 ) % nbOfExercises;
    }
  };

  $("#prev, #next").click( (event) => {
    switchExercise(event);
  });

  // after first loading
  $.get( "static/exercises/" + solutions[0].mini, function( data ){

    $("#htmlEditor").text(data);
    // load the solution in the hidden interpretor
    interpretorHidden
      .contents()
      .find("html")
      .html( data )

    // definitely generates the regex from the solution
    const generatedRegex = regexFromDom( interpretorHidden.contents().find("body") );
    registerEvent(generatedRegex);
  });


});
