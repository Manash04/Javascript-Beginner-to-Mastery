function squares(n){
    return n*n;
}
// function cube(n){
//     return n*n*n;
// }
function sumOfAnything(a,b,fn){
    const sum1 = fn(a);
    const sum2 = fn(b);
    return sum1 + sum2;
}
console.log(sumOfAnything(5,2,function(n){  //Passing the function itself without mentioning the name of the function is called anonymous function
    return n*n*n;
})); 
// console.log(sumOfAnything(5,2,cube)); 