function outer(x) {
    function inner(y) {
        return x + y;
    }
    return inner;
}

const outerReturn = outer(10);
// console.log(outerReturn); 
outerReturn(2);