//define the function to show magician
function show_magicians(magician) {
    magician.forEach(function (name) { console.log(name); });
}
function make_great(main) {
    return main.map(function (name) { return "The great ".concat(name); });
}
//difine arrey
var magician_name = ["Jadu", "Super main", "Harry poter"];
var great_magician = make_great(magician_name);
show_magicians(great_magician);
