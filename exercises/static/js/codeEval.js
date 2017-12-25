  self.onmessage = function (event) { try{ eval ( event.data.code ); }
    catch(e){
        self.postMessage(e.stack);
    }
};

const code = `const insertInOrder = function( element, arr ){
    if( arr.length === 0){
        return [element];
    }
    else if( element <= arr[0] ){
        return [element].concat(arr);
    }
    else{
        return arr.slice(1).concat( insertInOrder() );
    }
};
console.log( insertInOrder(80, [8,10,111,1111] ) );
`;
try{
    eval ( code );
}
catch(e){
    self.postMessage(e.stack);
}

var window = {}; // polyfill since web worder do not have window and console
window.alert = function(){
    console.log.apply(console, ["Alert: "].concat(Array.prototype.slice.call(arguments)));
};
var alert = window.alert;
var console = {
    log: function(){
        var str = "";
        for(var i = 0; i < arguments.length; i++){
            str += JSON.stringify(arguments[i]) + " ";
        }
        str += "\n";
        // send the message back to the main thread
        self.postMessage(str);
    },
    error: function(){
        console.log.apply(console, ["ERROR: "].concat(Array.prototype.slice.call(arguments)));
    },
    warn: function(){
        console.log.apply(console, ["WARNING: "].concat(Array.prototype.slice.call(arguments)));
    }
};


/*
      var formerLog = console.log;
      console.log = function(){ // override console.log
        formerLog.apply(console, arguments); // call the original logging
        var args = Array.prototype.slice.call( arguments );
        var log = '', i=0;
        for( i; i < args.length; i++ ){
          if ( typeof args[i] === "object" && typeof JSON === "object" && typeof JSON.stringify === "function" ) {
            log += `<span class="log-${typeof args[i]}">${ JSON.stringify(args[i], undefined, 2).replace(/"([^"]*)":/g, '$1:')}</span>`; // object without "" on keys
          }
          else {
            log += `<span class="log-${typeof args[i]}">${args[i]}</span>`; // atom type of variable
          }
          if ( i < args.length -1 ){ // do not add a blank to the last parameter to be printed
            log += '&nbsp;';
          }
        }
        $("#interpretor").append(`<div>${log}</div>`);
      };


*/