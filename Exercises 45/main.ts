//difine a funcation to create a car 
function create_car(manufacturer, model,...options){
    //initialize a car object 
    let car ={
        manufacturer: manufacturer,
        model:model,
    };

    //add additional option to the car object 
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    
    return car;
    
}

//call the funcation to creat a car object
let may_car = create_car("TATA", "Corrolla", "color:Black","sunroof:true");

//call function
console.log(may_car);