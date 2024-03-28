// @ts-nocheck
// 1. ერთი ფორით დავუვყეთ სიმაღლეს, ანუ 0დან 8მდე
// for(let i = 0; i < 10; i++)
// 2. ერთი ფორით დავუვყეთ სიგრძეს, ანუ 0დან 19მდე
// for(let i = start; i < finish; i++)
// 3. მეორე forის ყოველ დასრულებაზე, ვზრდით საწყისს(start) და ვამცირებთ finish-ს

// var height = 10;
// var start = 0;
// var finish = 19;
// var row = "";

// for (var i = 0; i < height; i++) {
//   for (let j = 0; j < finish; j++) {
//     if (j < start) {
//       row += "   ";
//       continue;
//     }
//     row += " * ";
//   }
//   console.log(row);
//   start++;
//   finish--;
//   row = "";
// }

// var forCycleNumber = 9;
// var sum = 0;
// var counter = 0;
// for (var i = 0; i < forCycleNumber; i++) {
//   var randomNumber = Math.round(Math.random() * 236 + 135);
//   if (randomNumber % 2 === 0) {
//     console.log("randomNumber: ", randomNumber);
//     counter++;
//     sum += randomNumber;
//   }
// }

// var average = sum / counter;
// console.log("average: ", average);

// var myArray = [
//   15,
//   25,
//   3,
//   "3",
//   "Vakhtang",
//   true,
//   false,
//   null,
//   undefined,
//   "ragaca",
// ];

// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[4]);
// console.log(myArray[9]);

// console.log(myArray[10]);

// var myNewArray = new Array("vaxo", "vaxo2", "vaxo3");

// console.log(myNewArray);

// var randomArray = [];
// for (var i = 0; i < 10; i++) {
//   randomArray.push(Math.round(Math.random() * 100));
// }

// console.log(randomArray);

// for (var index in randomArray) {
//   console.log("ინდექსი - " + index + " მნიშვნელობა " + randomArray[index]);
// }

// var array1 = ["a", "b", "c", "d", "e", "f"];
// console.log("Before popping", array1);
// var lastLement = array1.pop();
// console.log("After popping", array1);
// console.log("Last element was ", lastLement);

// var array1 = ["a", "b", "c", "d", "e", "f"];
// array1.push("g");
// console.log(array1);
// array1[0] = "z";
// console.log(array1);

// var lastElement = array1[array1.length - 1];

// var randomArray = [];
// for (var i = 0; i < 10; i++) {
//   randomArray.push(Math.round(Math.random() * 100));
// }
// console.log("random number array from 0 to 100", randomArray);

// for (var i = 0; i < randomArray.length; i++) {
//   if (randomArray[i] % 2 === 1) {
//     console.log(
//       `Index of odd number is ${i} and the odd number itself is ${randomArray[i]}`
//     );
//   }
// }

// var randomArray = [];
// for (var i = 0; i < 10; i++) {
//   randomArray.push(Math.round(Math.random() * 100));
//   if (randomArray[i] % 2 === 1) {
//     console.log(
//       `Index of odd number is ${i} and the odd number itself is ${randomArray[i]}`
//     );
//   }
// }

// var myName = "Vakhtang";
// for (var i = 0; i < myName.length; i++) {
//   console.log(myName[i]);
// }

// დავალება #2
var myNameArray = ['Ani', 'Anna', 'akaki', 'Vakhtang', 'Giorgi', 'anri'];
var namesWithAAndI = [];
for (var i = 0; i < myNameArray.length; i++) {
  if (myNameArray[i][0].toLowerCase() === 'a') {
    console.log(myNameArray[i]);
  }
  var lastLetter = myNameArray[i][myNameArray[i].length - 1];
  if (
    myNameArray[i][0].toLowerCase() === 'a' &&
    lastLetter.toLowerCase() === 'i'
  ) {
    namesWithAAndI.push(myNameArray[i]);
  }
}

console.log('namesWithAAndI', namesWithAAndI);

var arrayIndexName = myNameArray[0];
console.log(arrayIndexName);
console.log(arrayIndexName[arrayIndexName.length - 1]);
