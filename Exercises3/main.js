var personName = "Iqra Fatima";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
//titale cases regular cese
console.log(personName.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));
