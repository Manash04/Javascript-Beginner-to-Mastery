let stocks = {
    Fruits: ["apple", "banana", "strawberry", "grapes"],
    Liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};

let is_shop_open = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {

            setTimeout(() => {
                resolve(work())
            }, time);

        } else {
            reject(console.log("Our shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

    .then(() => {
        return order(1000, () => {
            console.log("Production has been started ")
        });

    })

    .then(() => {
        return order(2000, () => {
            console.log("The fruit has been chopped")
        });
    })

    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)
        });
    })

    .then(() => {
        return order(1000, () => {
            console.log("The machine has been started ")
        });
    })

    .then(() => {
        return order(2000, () => {
            console.log(`${stocks.holder[0]} has been selected`)
        });
    })

    .then(() => {
        return order(3000, () => {
            console.log(`${stocks.topping[0]} has been selected`)
        });
    })

    .then(() => {
        return order(2000, () => {
            console.log("Ice Cream is ready to serve")
        });
    })

    .catch(() => {
        console.log("Customer left" )
    })

    .finally(() => {
        console.log("Day ended, shop closed")
    });


    // wether the statement is true or false the finally 
    // statement will always be executed