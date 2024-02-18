// app.js
function calc(a, b) {
    return (2*(a + b));
}

console.log(calc(1, 5));

// default parameter
function calc(a, b=0) {
    return (2*(a + b));
}

console.log(calc(1));
