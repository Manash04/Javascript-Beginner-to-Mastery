function calculatorArithmetic(a,b,arithmeticFinalFunction){
    const ans=arithmeticFinalFunction(a,b)
    return ans;
}
function sum(a,b) {
    return a + b;
}
const value=calculatorArithmetic(a,b,sum);
console.log(value);

