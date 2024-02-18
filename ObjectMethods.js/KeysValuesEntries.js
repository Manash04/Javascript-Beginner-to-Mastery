const person ={name: 'John',age:30};
const key = Object.keys(person);
console.log(key);

// [ 'name', 'age' ] 

const values = Object.values(person);
console.log(values);

// [ 'John', 30 ] 

const entries= Object.entries(person);
console.log(entries);

// [ [ 'name', 'John' ], [ 'age', 30 ] ]