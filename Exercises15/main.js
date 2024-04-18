var guestlist = ["Iqra", "Ilsa", "Umaima", "Fatima", "Urooj"];
var dontcome = guestlist[0];
console.log(dontcome, "Nai ana hai");
guestlist.splice(0, 1, "Tooba");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you ilke to dinner with me?")); });
