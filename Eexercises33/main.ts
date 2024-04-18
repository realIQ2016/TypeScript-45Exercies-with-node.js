let numbre = [1, 2,3, 4, 5, 6, 7, 8, 9];
//using for-loop 
for(let oneNum of numbre){let ordinalEnding: string;
if(oneNum === 1){ordinalEnding = "st"}
else if(oneNum === 2){ordinalEnding = "nd"}
else if(oneNum === 3){ordinalEnding = "rd"}
else{ordinalEnding = "th"}

console.log(`${oneNum}${ordinalEnding}`);}



