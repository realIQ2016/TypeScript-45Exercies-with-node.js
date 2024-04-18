function T_shirt (size: string = "large", printmessag: string = "i love typeScript")
{console.log(`creating a ${size} shirt with the ${printmessag} print on shirt`)}

//Calling a function By default
T_shirt();

//calling a function now with medium size and default mesg
T_shirt("Medium")

//.....calling size & print message
T_shirt("small","i love JS")