//შექმენი მასივი, რომელშიც ჩაწერთ 10 სახელს. დაბეჭდეთ ამ მასივიდან ყველა სახელი, რომელიც იწყება
//"g"ზე(თუ სახელი იწყება G-ზე, მაინც).

// const myArr = [
//   'George', // i = 0
//   'John', // i = 1 j = 0, j = 1, j = 2, j = 3
//   'Michael', // i = 2, j = 0, j = 1, j = 2, j = 3, j = 4, j = 5, j = 6, j = 7
//   'garry',
//   'William',
//   'Angi',
//   'Ronald',
//   'Thomas',
//   'Richard',
//   'Jimmy',
// ];

// for (let i = 0; i < myArr.length; i++) {
//   const name = myArr[i];
//   //   if (name[0] === 'G' || name[0] === 'g') {
//   //     console.log(name);
//   //   }
//   for(let j = 0; j < name.length; j++) {
//     if (name[j] === 'G' || name[j] === 'g') {
//       console.log(name);
//       break;
//     }
//   }
// }

//Შექმენით მასივი რომელშიც იქნება შენახული რიცხვები 2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326 ,
//გადაიარეთ მასივზე ციკლის მეშვეობით და დაბეჭდეთ კონსოლის ფანჯარაში თითოეული რიცხვის გამოყოფების რაოდენობა.
// const numArray = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326];
// for (let i = 0; i < numArray.length; i++) {
//   let counter = 2;
//   for (let j = 2; j < numArray[i]; j++) {
//     if (numArray[i] % j === 0) {
//       counter++;
//     }
//   }
//   console.log(`${numArray[i]} has ${counter} factors.`);
// }

// const arr = [];
// for (let i = 0; i < 10; i++) {
//   const rndNumber = Math.round(Math.random() * 30 + 20);
//   arr.push(rndNumber);
// }

// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//     counter++;
//   }
// }

// console.log(`ლუწი რიცხვების რაოდენობაა ${counter}`);

// const arr = [];
// let sum = 0;

// for (let i = 0; i < 10; i++) {
//   const rndNumber = Math.round(Math.random() * 90 + 10);
//   sum += rndNumber;
//   arr.push(rndNumber);
// }

// const average = sum / arr.length;
// console.log({ average, sum });

// let arr = [];

// const myArr = [2, 121, 4341, 256, 562, 43, 12, 55, 32, 98, 98];
// for (let i = 0; i < 10; i++) {
//   const rndNumber = Math.round(Math.random() * 15 + 10);
//   arr.push(rndNumber);
// }

// let isUnique = true;
// for (let i = 0; i < myArr.length; i++) {
//   for (let j = i + 1; j < myArr.length; j++) {
//     if (myArr[i] === myArr[j]) {
//       isUnique = false;
//       break;
//     }
//   }
// }
// console.log(isUnique ? 'უნიკალურია' : 'არ არის უნიკალური');

let arr = [];

const myArr = [2, 121, 254, 256, 562, 121, 12, 55, 32, 98, 98];
// for (let i = 0; i < 10; i++) {
//   const rndNumber = Math.round(Math.random() * 15 + 10);
//   arr.push(rndNumber);
// }

// for (let i = 0; i < myArr.length; i++) {
//   let isUnique = true;
//   debugger;
//   for (let j = 0; j < myArr.length; j++) {
//     if (myArr[i] === myArr[j] && i !== j) {
//       isUnique = false;
//       break;
//     }
//   }
//   if (isUnique) console.log(myArr[i]);
// }
// const newArr = [];
// for (let i = 0; i < 10; i++) {
//   const rnNumber = Math.floor(Math.random() * 15 + 10); // 15
//   let alreadyIncludes = false;
//   for (let j = 0; j < newArr.length; j++) {
//     if (newArr[j] === rnNumber) {
//       alreadyIncludes = true;
//       i--;
//       break;
//     }
//   }
//   if (!alreadyIncludes) newArr.push(rnNumber);
// }
// console.log({ newArr });
