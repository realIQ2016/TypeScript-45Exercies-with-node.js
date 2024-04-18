//making a arry of country and print its orginal order
let countriesToVisit: string[] = ["France", "Canada", "denmark", "Bangladish", "Amirca"];
console.log("orginal order:", countriesToVisit);

//Print that the  array in alphabetical order without modifying the actual list.
console.log("alphabetical order:",[...countriesToVisit].sort());

//show that the array is still in its original order.
console.log("still in orginal order:", countriesToVisit);

//array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse order:", [...countriesToVisit].reverse());

//show that the array is still in its original order.
console.log("still in orginal order:", countriesToVisit);

//we have chanded the orignal arry order now
console.log("orginal arry Reversed:", countriesToVisit.reverse());

//print the arryto show that its back to its orignal order
console.log("Back to orignal:", countriesToVisit.reverse());

//print the arry to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());

//we have changed again arry order now in reverse order agin
console.log("orginal arry Reversed:", countriesToVisit.reverse());



