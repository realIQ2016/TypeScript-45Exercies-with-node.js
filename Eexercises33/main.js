var numbre = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for-loop 
for (var _i = 0, numbre_1 = numbre; _i < numbre_1.length; _i++) {
    var oneNum = numbre_1[_i];
    var ordinalEnding = void 0;
    if (oneNum === 1) {
        ordinalEnding = "st";
    }
    else if (oneNum === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNum === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNum).concat(ordinalEnding));
}
