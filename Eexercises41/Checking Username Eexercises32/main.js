//array of username
var current_users = ["Fatima", "Ali", "Ilsa", "Obaid", "Hamza"];
//array of new user
var new_user = ["Umaima", "Urooj", "fatima", "Iqra", "Ilsa"];
//through the new_users 
new_user.forEach(function (new_one_user) {
    //making a canditio for username already exist and save in our conditon
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print difrent mesg using if else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, "is already taken!"));
    }
    else {
        console.log("This ".concat(new_one_user, "is Available"));
    }
});
