// This is the normal function 

function squares(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSquares(a,b){
    const sum1 = squares(a);
    const sum2 = squares(b);
    return sum1 + sum2;
}
function sumOfCubes(a,b){
    const sum1 = cube(a);
    const sum2 = cube(b);
    return sum1 + sum2;
}
console.log(sumOfSquares(5,2)); 
console.log(sumOfCubes(5,2)); 

// Now same using callbacks 

function squares(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfAnything(a,b,fn){
    const sum1 = fn(a);
    const sum2 = fn(b);
    return sum1 + sum2;
}
console.log(sumOfAnything(5,2,squares)); 
console.log(sumOfAnything(5,2,cube)); 