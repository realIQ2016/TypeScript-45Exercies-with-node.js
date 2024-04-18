//array of username
let current_users = ["Fatima", "Ali", "Ilsa", "Obaid", "Hamza"];

//array of new user
let new_user = ["Umaima", "Urooj", "fatima", "Iqra", "Ilsa"];

//through the new_users 
new_user.forEach(new_one_user =>{
    //making a canditio for username already exist and save in our conditon
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLowerCase())
    
    //print difrent mesg using if else statement
    if(our_condition){console.log(`Sorry ${new_one_user}is already taken!`)
    }else{console.log(`This ${new_one_user}is Available`)}
})
