// var myArray = [1, 2, 3, 4, 5, 6, "vaxo", "Vakhtang"];

// console.log(myArray);
// console.log(myArray.join());
// console.log(myArray.join("|"));

// var myArray2 = [1, 5, "Vakhtang", "Ani", 10, 25];
// console.log(myArray2);
// console.log(myArray2.reverse());

// var newArray = [1, 2, 22, 33, 55, 5, 10, 12, 122, 111];
// console.log(newArray.sort((a, b) => b - a));

// var myNewArray = [1, 2, 5, 10, 12, 15, 19, 20, 25, 30];

// var slicedArray = myNewArray.slice(2, 8);
// console.log(slicedArray);
// // console.log(myNewArray.slice(2, 8));

// console.log(slicedArray.slice(-3));

// var sortedArray = [1, 2, 3, 5, 7, 8, 10];
// for (var i = 1; i < sortedArray.length; i++) {
//   if (sortedArray[i] - sortedArray[i - 1] > 1) {
//     sortedArray.splice(i, 0, sortedArray[i - 1] + 1);
//   }
// }

// console.log(sortedArray);

// var sortedArray = [1, 2, 5, 7, 10, 15];

// for (var i = 1; i < sortedArray.length; i++) {
//   if (sortedArray[i] - sortedArray[i - 1] > 1) {
//     sortedArray.splice(i, 0, sortedArray[i - 1] + 1);
//   }
// }
// console.log(sortedArray);

// for (var i = 0; i < sortedArray.length; i++) {
//   if (sortedArray[i + 1] - sortedArray[i] > 1) {
//     sortedArray.splice(i + 1, 0, sortedArray[i] + 1);
//   }
// }
// console.log(sortedArray);

// var namesArray = ["Vakhtang", "Ani", "Giorgi", "Irakli", "Levani"];
// var indexOfGiorgi = namesArray.indexOf("Giorgi");
// console.log(indexOfGiorgi);

// console.log(namesArray.slice(indexOfGiorgi));

// var numbersArray = [1, 5, 10, 13];
// var indexOfTen = numbersArray.indexOf(10);

// numbersArray.splice(indexOfTen + 1, 0, 11, 12);
// console.log(numbersArray);

// var sortedArray = [0, 2, 3, 4, 5, 8, 9, 10, 12];
// for (var i = 0; i < sortedArray.length - 1; i++) {
//   if (sortedArray[i + 1] - sortedArray[i] > 1) {
//     sortedArray.splice(i + 1, 0, sortedArray[i] + 1);
//   }
// }

// console.log(sortedArray);

// var newArray = [1, 2, 3, 8, 5, 10, 15, 12, 13];
// for (var i = 0; i < Math.floor(newArray.length / 2); i++) {
//   var temp = newArray[i];
//   newArray[i] = newArray[newArray.length - 1 - i];
//   newArray[newArray.length - 1 - i] = temp;
// }

// console.log(newArray);

// const array = [1, 5, 10, 3, 20, 30];
// let counter;
// for (let i = 0; i < array.length; i++) {
//   counter = array.length;
//   console.log(array[counter - i - 1]);
// }
// console.log(array);

// var array = [30, 20, 3, 5, 10, 5, 1];
// for (var i = 0; i < Math.floor(array.length / 2); i++) {
//   var temp = array[i];
//   array[i] = array[array.length - 1 - i];
//   array[array.length - i - 1] = temp;
// }

// console.log(array);

// const arr = [];
// for (let i = 0; i < 20; i++) {
//   const rndNumber = Math.floor(Math.random() * 50 + 10);
//   if (rndNumber % 2 === 0) {
//     arr.push(rndNumber);
//   } else i--;
// }

// console.log(arr);
// let duplicateArr = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       duplicateArr.push(arr[j]);
//       break;
//     }
//   }
// }
// console.log(duplicateArr);
// let isUnique = true;
// let duplicateIndex = null;
// let duplicateNumber = null;
// for (let i = 0; i < duplicateArr.length; i++) {
//   for (let j = i + 1; j < duplicateArr.length; j++) {
//     if (duplicateArr[i] === duplicateArr[j]) {
//       isUnique = false;
//       duplicateNumber = duplicateArr[j];
//       duplicateIndex = j;
//       break;
//     }
//   }
// }
// console.log(
//   isUnique
//     ? 'All elements are unique'
//     : `There are duplicate element ${duplicateNumber} on index ${duplicateIndex}`
// );
