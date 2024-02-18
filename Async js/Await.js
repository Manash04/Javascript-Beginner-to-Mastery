let stocks = {
    Fruits: ["apple", "banana", "strawberry", "grapes"],
    Liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};

let is_shop_open = false;

let toppings_choice = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Which topping do you want to have?"));
        },3000);
    });
}

async function kitchen(){
    console.log("A");
    console.log("B");
    console.log("C");

    await toppings_choice();

    console.log("D");
    console.log("E");

}
kitchen();
console.log("Doing the dishes...");
console.log("cleaning up...");
console.log("Taking the orders...");


