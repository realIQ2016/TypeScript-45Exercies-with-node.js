"use strict";
function sandwich(...items) {
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(singlitems => console.log(singlitems));
    console.log("\nEnjoy your sandwich");
}
//call the function with 3 times
sandwich("Chicken", "cheese", "Egg");
sandwich("chicken", "cheese", "mayo");
sandwich("Bread", "Mayo", "khera", "Egg", "cheese", "Tomato");
