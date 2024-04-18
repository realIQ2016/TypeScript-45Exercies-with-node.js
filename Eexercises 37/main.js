function T_shirt(size, printmessag) {
    if (size === void 0) { size = "large"; }
    if (printmessag === void 0) { printmessag = "i love typeScript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printmessag, " print on shirt"));
}
//Calling a function By default
T_shirt();
//calling a function now with medium size and default mesg
T_shirt("Medium");
//.....calling size & print message
T_shirt("small", "i love JS");
