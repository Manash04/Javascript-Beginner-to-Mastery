function squares(n){
    return n*n;
}
// console.log(squares(2));

function sumOfSquares(a,b){
    const sum1 = squares(a);
    const sum2 = squares(b);
    return sum1 + sum2;

}
console.log(sumOfSquares(5,2)); 