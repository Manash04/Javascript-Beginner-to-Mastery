const num=[1,2,3,4];
const hasEven=num.some(num=>num%2===0);
const allEven=num.every(num=>num%2===0);
console.log(hasEven);
console.log(allEven);

// true
// false