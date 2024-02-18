const prompt = require('prompt-sync')();
let n=prompt("Enter the size of the array: ")
n=parseInt(n);
let arr=[];
console.log("Enter the elements of the array: ");
for(let i=0; i<n; i++){
    arr[i]=parseInt(prompt(`Enter element ${i+1}: `));
}
console.log("The even values of the arrays are: ");
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}