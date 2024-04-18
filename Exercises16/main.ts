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
