

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

var window = {};
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