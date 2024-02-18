// imediately invoke function expression 

(function(){
    console.log("imediately invoke function expression")
})();


var ans =(function(){
    var privateval=12;  // private function the privateval cannot  be accessed directly
    return{
        getter:function(){  //it can be accesed throught the getter function
            console.log(privateval);
        },
        setter:function(val){//used to set the value
            privateval=val;
        }
    }
    })()
