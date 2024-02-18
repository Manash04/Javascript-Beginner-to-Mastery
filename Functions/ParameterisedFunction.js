// simple function

function print1(){
    console.log("This is the simple function without the parameters");
}
print1();


// Parameterised function

function print2(Name){
    console.log(Name)
}
print2("Manash");

// Here Name--> Parameter  &&   Manash--> Argument

// Defining the function using the function expressions

const print3 = function(){
      console.log("Defining the function using the function expressions");
}
print3();

// Defining the parameterised function using the function expressions 

const print4 = function(a,b){
    console.log(a,b);
}
print4(1,2); 