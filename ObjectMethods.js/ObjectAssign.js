const target ={a:1,b:2}
const source={b:3,c:4}
const merge= Object.assign({}, target, source)
console.log(merge) 

// { a: 1, b: 3, c: 4 }