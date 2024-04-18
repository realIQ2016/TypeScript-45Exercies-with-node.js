//difine a funcation to create a car 
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object 
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add additional option to the car object 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the funcation to creat a car object
var may_car = create_car("TATA", "Corrolla", "color:Black", "sunroof:true");
//call function
console.log(may_car);
