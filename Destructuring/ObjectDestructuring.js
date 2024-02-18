const personOne = {
  name: "John",
  age: 34,
  address: {
    city: "San Francisco",
    state: "CA",
  }
}

const personTwo = {
    name: "Manash",
    age:32,
    address: {
        city: "Francisco",
    state: "Nothing",
  }
}

const{name: firstName="John",age,favFood="Rice"} = personTwo

console.log(firstName)
console.log(age)
console.log(favFood)