// @ts-nocheck
// var myArray = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326];

// var randomNumber = 326;

// var counter = 0;

// for (var i = 0; i < myArray.length; i++) {
//   counter = 2;
//   for (var j = 2; j < myArray[i]; j++) {
//     if (myArray[i] % j === 0) {
//       counter++;
//     }
//   }
//   console.log(`${myArray[i]} has ${counter} factors.`);
// }

// დავალება 2
// var randomNumber = Math.round(Math.random() * (500 - 100) + 100);
// console.log(randomNumber);

// var myRandomArray = [];
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   var randomNumber = Math.round(Math.random() * (500 - 100) + 100);
//   myRandomArray.push(randomNumber);
//   sum += randomNumber;
// }

// console.log(myRandomArray);
// console.log(sum);

// for (var i = 0; i < myRandomArray.length; i++) {
//   sum += myRandomArray[i];
// }

// var maxNumber = myRandomArray[0];
// for (var i = 1; i < myRandomArray.length; i++) {
//   if (maxNumber < myRandomArray[i]) {
//     maxNumber = myRandomArray[i];
//   }
// }
// console.log(maxNumber);

// var arr = [];
// while (arr.length < 10) {
//   var r = Math.floor(Math.random() * 100) + 1;
//   if (arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);

// დავალება 3
// var uniqueArray = [];
// for (var i = 0; i < 10; i++) {
//   var randomNumber = Math.round(Math.random() * (50 - 20) + 20);
//   if (uniqueArray.indexOf(randomNumber) === -1) {
//     uniqueArray.push(randomNumber);
//   } else {
//     i--;
//   }
// }

// var uniqueArray = [];
// for (var i = 0; i < 10; i++) {
//   var randomNumber = Math.round(Math.random() * (30 - 20) + 20);
//   var hasElement = false;
//   for (var j = 0; j < uniqueArray.length; j++) {
//     if (uniqueArray[j] === randomNumber) {
//       hasElement = true;
//       // i--;
//       break;
//     }
//   }
//   if (!hasElement) uniqueArray.push(randomNumber);
// }

// console.log(uniqueArray);

//ჩაწერეთ მასივში 10 რენდომ რიცხვი 20დან 50მდე შუალედში. აუცილებელი პირობაა რომ მასივში თუკი უკვე წერია ეს რიცხვი, აღარ ჩაწეროთ. ანუ მასივში უნდა ეწეროს უნიკალური რიცხვები.

// ჩაწერეთ მასივში 10 რენდომ რიცხვი 10დან 100მდე. ჩაწერეთ უნიკალური რიცხვები. რიცხვები, რომლებიც 50ზე მეტია, ამოიღეთ მასივიდან.

// Write 10 random numbers in array from 10 to 100. The numbers have to be unique.
// Delete the numbers that are greater than 50. Don't use indexOf method.

// let uniqueArray = [];
// for (let i = 0; i < 10; i++) {
//   let randomNumber = Math.round(Math.random() * (100 - 10) + 10);
//   let hasElement = false;
//   for (let j = 0; j < uniqueArray.length; j++) {
//     if (uniqueArray[j] === randomNumber) {
//       hasElement = true;
//       break;
//       i--;
//     }
//   }
//   if (!hasElement) uniqueArray.push(randomNumber);
// }
// console.log(uniqueArray);

// for (let i = 0; i < uniqueArray.length; i++) {
//   if (uniqueArray[i] > 50) {
//     uniqueArray.splice(i, 1);
//     i--;
//   }
// }

// console.log(uniqueArray);
