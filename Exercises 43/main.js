"use strict";
//define the function to show magician
function show_magicians(magician) {
    magician.forEach(name => { console.log(name); });
}
function make_great(main) {
    return main.map(name => `The great ${name}`);
}
//difine arrey
let magician_name = ["Jadu", "Super main", "Harry poter"];
//making a copy of orignal array through .slice function
let copy_magician_name = magician_name.slice();
//modify the copied array to include "the great " with thier names
let copy_great_magicians = make_great(copy_magician_name);
//show both array
// show   array original
console.log("orignal array\n");
show_magicians(magician_name);
//copied
console.log("\ncopied array");
show_magicians(copy_great_magicians);
