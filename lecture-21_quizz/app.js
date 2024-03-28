// დავალება 3
const arr = [];
for (let i = 0; i < 20; i++) {
  const rndNumber = Math.floor(Math.random() * 50 + 10);
  if (rndNumber % 2 === 0) {
    arr.push(rndNumber);
  } else i--;
}
console.log(arr);

let duplicateArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      duplicateArr.push(arr[j]);
    }
  }
}
console.log(duplicateArr);

let isUnique = true;
let duplicateIndex = null;
let duplicateNumber = null;
for (let i = 0; i < duplicateArr.length; i++) {
  for (let j = i + 1; j < duplicateArr.length; j++) {
    debugger;
    if (duplicateArr[i] === duplicateArr[j]) {
      isUnique = false;
      duplicateNumber = duplicateArr[j];
      duplicateIndex = j;
      break;
    }
  }
}
console.log(
  isUnique
    ? 'All elements are unique'
    : `There are duplicate element ${duplicateNumber} on index ${duplicateIndex}`
);

// // დავალება 2
// const namesArr = ['Giorgi', 'Avto', 'Mariami', 'Ani', 'Daviti', 'Mariami'];
// let isUnique = true;
// let duplicateIndex = null;
// let duplicateName = null;
// for (let i = 0; i < namesArr.length; i++) {
//   for (let j = i + 1; j < namesArr.length; j++) {
//     if (namesArr[i] === namesArr[j]) {
//       isUnique = false;
//       duplicateName = namesArr[i];
//       duplicateIndex = j;
//       break;
//     }
//   }
// }

// console.log(
//   isUnique
//     ? 'All elements are unique'
//     : `There are duplicate element ${duplicateName} on index ${duplicateIndex}`
// );
// const uniqueNamesArr = [];
// for (let i = 0; i < namesArr.length; i++) {
//   if (i !== duplicateIndex) {
//     uniqueNamesArr.push(namesArr[i]);
//   }
// }
// console.log(uniqueNamesArr);

// დავალება 1
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   const rndNumber = Math.floor(Math.random() * 95 + 5);
//   arr.push(rndNumber);
// }
// const evenArr = [];
// const oddArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArr.push(arr[i]);
//   } else {
//     oddArr.push(arr[i]);
//   }
// }

// for (let i = 0; i < evenArr.length; i++) {
//   if (evenArr[i] % 4 === 0 || evenArr[i] % 5 === 0) {
//     console.log(evenArr[i]);
//   }
// }
