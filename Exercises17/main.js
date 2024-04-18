var guestlist = ["Iqra", "Umaima", "Ilsa", "Fatima"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi a askte");
guestlist.splice(0, 1, "Tooba");
console.log("Good news 1 we have found a bigger table for dinner.");
guestlist.unshift("Urooj");
guestlist.push("Nimra");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Zain");
console.log("Updated list of our guests");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me?")); });
console.log("unfortunately, the new dinner tablet wont arrive on time, so i can invite only two guest dinner with me");
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("sorry, ".concat(removedguest, " i cant invite you to dinner."));
}
console.log("invitations to the last 2 guests");
guestlist.forEach(function (lastwo) { return console.log("luckly ".concat(lastwo, ", you are still invited to dinner")); });
guestlist.pop();
guestlist.pop();
console.log("Empry list:", guestlist);
