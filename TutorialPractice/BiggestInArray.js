const prompt = require('prompt-sync')();
let n=prompt('Enter the size of the array: ');
n=parseInt(n);
let arr=[];
console.log("Enter the value of the array");
for (let i=0; i<n; i++){
    arr[i]=parseInt(prompt(`Enter the element at index ${i+1}: `));
    }
    let greatest=arr[0];
    for (let i=0; i<n; i++){
        if(arr[i]>greatest){
            greatest=arr[i];
        }

    }
    console.log("The greatest element in the array is: "+ greatest);