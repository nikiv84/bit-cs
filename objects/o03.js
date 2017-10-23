// function convert(num, base, newBase) {
//     var newnum = parseInt(num, base);
//     return newnum.toString(newBase);
// }

// console.log(convert("FF", 16, 2));

// function reverseIt(num)
// {
// 	return num.toString().split("").reverse().join("");
// }
// console.log(reverseIt(123456));


// function sortMe(myString){

//    return myString.toLowerCase().split("").sort().join("");

// }
// console.log(sortMe("Marina Boskovic"));

// function toAlpha(myString) {
//     return myString.split(" ").sort().join(" ");
// }
// console.log(toAlpha("Marina Boskovic Aleksandar"));


// function convertMe(myString) {
//     return myString.trim().split(" ");
// }

// console.log(convertMe("      Marina Boskovic Aleksandar     "));


// function toAbr(myString) {
//     var fullName =  myString.trim().split(" ");
//     var abbName = "";
//     if(fullName.length > 1 ){
//         abbName += fullName[0] + " " + fullName[1].charAt(0) + ".";
//     }
//     if (typeof fullName[2] != "undefined") {
//         abbName += " " + fullName[2].charAt(0) + ".";
//     } else {
//         return fullName[0];
//     }
//     return abbName;
// } 
// console.log(toAbr("Marina Boskovic MMM"));

// function padMe(myString, myLength, side){
//     console.log(side.toLowerCase().charAt(0));
//     switch (side.toLowerCase().charAt(0)) {
//         case "l":
//             return myString.padStart(myLength);
//         case "r":
//             return myString.padEnd(myLength);
//     }

// }
// console.log(padMe("abc", 25, "Rightatatata"));

// function upIt(myString){
//     var firstChar = myString.charAt(0).toUpperCase();
//     return firstChar + myString.slice(1);
// };
// console.log(upIt("Mandarinica"));


// (function hideMe(myEmail){
//     var arr = myEmail.trim().split("@");
//     arr[0] = "*****";
//     console.log(arr.join("@"));


// })("marina@gmail.com");

(function changeCase(myString) {
    var newString = "";
    for (var i = 0; i < myString.length; i++) {
        if (myString[i] === myString[i].toLowerCase()) {
            myString[i]= myString[i].toUpperCase();
        }
        else {
            myString[i]= myString[i].toLowerCase();
        }
    }
    return console.log(myString);

})("Meda Medvedic je bio dobar danas.");
