let guestlist = ["Iqra","Umaima","Ilsa","Fatima"];

let dontcome = guestlist[0];

console.log(dontcome, "nahi a askte");

guestlist.splice(0,1,"Tooba");

console.log("Good news 1 we have found a bigger table for dinner.");

guestlist.unshift("Urooj");

guestlist.push("Nimra");

let middleindex:number = Math.floor(guestlist.length / 2);

guestlist.splice(middleindex,0, "Zain");

console.log("Updated list of our guests");

guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));

console.log("unfortunately, the new dinner tablet wont arrive on time, so i can invite only two guest dinner with me");

while(guestlist.length > 2 ){
let removedguest =guestlist.pop();
console.log(`sorry, ${removedguest} i cant invite you to dinner.`);
}

console.log("invitations to the last 2 guests")
guestlist.forEach(lastwo => console.log(`luckly ${lastwo}, you are still invited to dinner`));


guestlist.pop();
guestlist.pop();

console.log ("Empry list:",guestlist);


