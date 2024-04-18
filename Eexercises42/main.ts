//define the function to show magician
function show_magicians (magician: string[]){
    magician.forEach(name => {console.log(name)});
}

function make_great (main: string[]){
return main.map(name => `The great ${name}`);
}

//difine arrey
let magician_name = ["Jadu","Super main", "Harry poter"]

 let great_magician = make_great(magician_name);

show_magicians(great_magician);