// The variable declared inside the 
// function cant be accesed outside of the fuction 

function doSomething(){
    let x=10;
    const y=20;
    var z=30;

    console.log(x,y,z);
}

doSomething(); 

// Now lets try to access the variable from outside of the function 
//  console.log(x,y,z); //it will show error


 //***********************************************/

 let x=10;
 const y=20;
 var z=30;
function doSomething(){
    console.log(x,y,z);
}
doSomething();

