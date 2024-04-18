var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a arry of country and print its orginal order
var countriesToVisit = ["France", "Canada", "denmark", "Bangladish", "Amirca"];
console.log("orginal order:", countriesToVisit);
//Print that the  array in alphabetical order without modifying the actual list.
console.log("alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
//show that the array is still in its original order.
console.log("still in orginal order:", countriesToVisit);
//array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
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
