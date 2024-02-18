let stocks = {
    Fruits: ["apple", "banana", "strawberry", "grapes"],
    Liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};

let is_shop_open=true;

function time(ms){
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve,ms);
        }
        else {
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected...`);

        await time(1000);
        console.log("Start the production...");
         await time(2000);
        console.log("Cut the Fruits...")

        await time(1000);
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added...`)

        await time(1000);
        console.log("Start the machine..")

        await time(2000);
        console.log(`${stocks.holder[0]} has been selected..`)

        await time(3000);
        console.log(`${stocks.topping[0]} has been selected..`)

        await time(2000);
        console.log("Serve the IceCream...hurah..!!")
    }
    catch(error){
        console.log("Customer left",error);
    }
    finally{
        console.log("Day ended, Shop is closed");
    }
    }

    kitchen();