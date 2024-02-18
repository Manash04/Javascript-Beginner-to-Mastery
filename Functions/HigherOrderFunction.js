// It takes one or more functions as argument
// // it may return a function 
function getCapture(camera){
    camera();
}
getCapture(function(){        //callbacks
    console.log("Canon");
});


function returnFn(){
    return function(){
        console.log("Returning something...");
    }
}
const fn = returnFn();

// example

var arr=[1,2,3,4,5];
arr.forEach(function(){});

