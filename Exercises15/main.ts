let guestlist = ["Iqra","Ilsa","Umaima","Fatima","Urooj"];

let dontcome = guestlist[0];

console.log(dontcome, "Nai ana hai");
guestlist.splice(0,1, "Tooba");

guestlist.forEach(guest => console.log(`Salam ${guest}, would you ilke to dinner with me?`));