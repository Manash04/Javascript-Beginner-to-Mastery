let stocks = {
    Fruits: ["apple", "banana", "strawberry", "grapes"],
    Liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};

let order = (fruitIndex, callProduction) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitIndex]} was selected`);
        callProduction();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The Fruit has been chopped");

            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

                setTimeout(() => {
                    console.log("The machine has been started");

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} has been selected`);
                    
                         setTimeout(() => {
                             console.log(`${stocks.topping[0]} was added`);

                             setTimeout(() => {
                                console.log("Ready to serve the icecream!");
                             },2000);
                        },3000);
                    },2000);
                }, 1000);

            }, 1000);
        }, 2000);
    }, 0);
};

order(0, production);