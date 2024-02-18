const initialArray=[1,2,3];
initialArray.push(2); //[ 1, 2, 3, 2 ]
console.log(initialArray);

initialArray.pop(); //[ 1, 2, 3 ]
console.log(initialArray);

initialArray.shift(); //[ 2, 3 ]
console.log(initialArray);

initialArray.unshift(8);  //[ 8, 2, 3 ]
console.log(initialArray);

//concatination
const secondArray=[4,5,6];
console.log(initialArray.concat(secondArray));
//[ 8, 2, 3, 4, 5, 6 ]

//forEach
function logThing(str){
    console.log(str + "is the string");
}
initialArray.forEach(logThing);

// Output
// 8 is the string
// 2 is the string
// 3 is the string