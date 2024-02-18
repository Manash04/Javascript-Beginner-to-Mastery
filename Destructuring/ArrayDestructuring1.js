const alphabet=["a","b","c","d","e","f"]
const numbers=["1","2","3","4","5"]

// const a= alphabet[3]
// const b= alphabet[4] normal method

// const [a,b]=alphabet
const [a,, c, ...rest]=alphabet
const newArray = [...alphabet,...numbers]


console.log(a)
// console.log(b)
console.log(c)
console.log(rest)
console.log(newArray)

function sumAndMultiply(a,b) {
    return[a*b,a+b]
}
const [sum,multiply]=sumAndMultiply(2,3)
console.log(sum)
console.log(multiply)   




 


