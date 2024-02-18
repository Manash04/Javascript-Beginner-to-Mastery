// THE SYNTAX FOR THE PROMISE

let order = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve()
        }
        else{
            reject()
        }
    })
}

order()
.then()
.then()
.then()
.catch()
.finally()


// THE SYNTAX FOR THE ASYNC

async function order(){
    try{
        await abc;
    }
    catch(error){
        console.log("abc doesnt exist", error);
    }
    finally{
        console.log("runs code anyways");
    }
}

order()
.then(()=>{
    console.log("Iam tierd");
});