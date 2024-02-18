         // length

function getLength(str){
    console.log("Original string:", str);
    console.log("Length of the string:", str.length);

}
getLength("Hello World!");


// *************************************************** 
        // indexOf 

function findIndexOf(str, target){
    console.log("Original string:", str);
    console.log("Index:",str.indexOf(target));
}
findIndexOf("Hello World!","World!");

        //  lastIndexOf 
function findIndexOf(str, target){
    console.log("Original string:", str);
    console.log("Index:",str.lastIndexOf(target));
}
findIndexOf("Hello World World World","World");

// *************************************************** 

//   Slice and substr
function getSlice(str, start, end){
    console.log("Original string:", str);
    console.log("After Slice:", str.slice(start,end));
}
getSlice("Hello World",0,4);


const value= "ManashBandhu";
let ans= value.slice(2,5); //nas
let ans1=value.substr(2,5); //nashB
console.log("Slice:",ans);
console.log("Substring:",ans1);
 
// *************************************************** 

function cutIt(str, startIndex, endIndex) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= startIndex && i < endIndex) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

console.log(cutIt("Javascript", 2, 3));
let ans2= value.slice(2,5);


// *************************************************** 
 //replace

 const str="hello world";
 console.log(str.replace("world","javascript"));
//  hello javascript

 // *************************************************** 
//split

const value1= "Hi iam a frontend developer";
const words= value1.split(" ");
console.log(words);
// [ 'Hi', 'iam', 'a', 'frontend', 'developer' ]

// ***************************************************
//trim

const value2= "  Manash Bandhu    ";
console.log(value2.trim());
// Manash Bandhu

// ***************************************************
//toUpperCase and toLowerCase

const value3=" Manash Bandhu"
console.log(value3.toUpperCase());   //MANASH BANDHU

console.log(value3.toLowerCase());   //manash bandhu

// ***************************************************
//parseInt ---> convert string to an integer

console.log(parseInt("42")); //42
console.log(parseInt("42px")); //42
console.log(parseInt("3.14")); //3

