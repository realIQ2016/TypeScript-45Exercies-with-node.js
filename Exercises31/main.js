var userName = ["Iqra", "Ilsa", "Umaima", "Urooj", "Admin"];
//Remove all values from array
//userName = []
//cheak empty array
if (userName.length === 0) {
    console.log("Your array is empty we need to find some users.");
}
//not empty array so type mesg forEach 
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see a status repot."));
        }
        else {
            console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
        }
    });
}
