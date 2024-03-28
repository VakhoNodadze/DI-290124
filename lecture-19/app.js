// const userInput = Math.floor(Math.random() * 51 + 50);

// console.log(`The user input is: ${userInput}`);
// let sumOfDevides = 0;
// let numberOfDevides = 0;
// for (let i = 1; i <= userInput; i++) {
//   if (userInput % i === 0) {
//     sumOfDevides += i;
//     console.log(`Devisor: ${i}`);
//     numberOfDevides++;
//   }
// }

// const average = sumOfDevides / numberOfDevides;
// console.log(`The average of all the devisors of ${userInput} is ${average}`);

// const userInput1 = 90;
// const userInput2 = 100;
// const userInput3 = 125;

// const numberOfDevides1 = 0;
// const numberOfDevides2 = 0;
// const numberOfDevides3 = 0;

// for (let i = 1; i <= userInput1; i++) {
//   if (userInput1 % i === 0) {
//     numberOfDevides1++;
//   }
// }

// for (let i = 1; i <= userInput2; i++) {
//   if (userInput2 % i === 0) {
//     numberOfDevides2++;
//   }
// }

// for (let i = 1; i <= userInput3; i++) {
//   if (userInput3 % i === 0) {
//     numberOfDevides3++;
//   }
// }

// if (
//   numberOfDevides1 > numberOfDevides2 &&
//   numberOfDevides1 > numberOfDevides3
// ) {
//   console.log(`${userInput1} has the most devisors`);
// } else if (
//   numberOfDevides2 > numberOfDevides1 &&
//   numberOfDevides2 > numberOfDevides3
// ) {
//   console.log(`${userInput2} has the most devisors`);
// } else {
//   console.log(`${userInput3} has the most devisors`);
// }

// numberOfDevides1 > numberOfDevides2 && numberOfDevides1 > numberOfDevides3
//   ? console.log(`${userInput1} has the most devisors`)
//   : numberOfDevides2 > numberOfDevides1 && numberOfDevides2 > numberOfDevides3
//   ? console.log(`${userInput2} has the most devisors`)
//   : console.log(`${userInput3} has the most devisors`);

// let variable1 = 5;
// let variable2 = 10;

// console.log({ variable1, variable2 });

// Swap the values of variable1 and variable2

// let temp = variable1; // variable1 = 5, temp = 5, variable2 = 10
// variable1 = variable2; // temp = 5, variable1 = 10, variable2 = 10
// variable2 = temp; // temp = 5, variable1 = 10, variable2 = 5

// variable1 = variable1 + variable2; // variable1 = 15, variable2 = 10
// variable2 = variable1 - variable2; // variable1 = 15, variable2 = 5
// variable1 = variable1 - variable2; // variable1 = 10, variable2 = 5

// [variable1, variable2] = [variable2, variable1];

// console.log({ variable1, variable2 });

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = ['Mariami', 'Vakhtang', 'Davit', 'Andro', 'Giorgi'];
// const arr3 = [5, 6, 'Mariami', 3, 'Vakhtang', 4, 5, 6, 7, 8, 9];

// const numbersArray = [];
// const stringArray = [];
// for (let i = 0; i < arr3.length; i++) {
//   if (typeof arr3[i] === 'number') {
//     numbersArray.push(arr3[i]);
//   } else {
//     stringArray.push(arr3[i]);
//   }
// }

// დავალება:
// მასივში ჩაწერეთ 20დან 50მდე 10 რანდომ რიცხვი.
// შემდეგ გადაყევით ამ მასივს და ლუწი რიცხვები ჩაწერეთ ლუწი რიცხვისთვის განკუთვნილ მასივში და კენტი რიცხვები კენტი რიცხვისთვის განკუთვნილ მასივში.
// const arr = [];
// const evenArray = [];
// const oddArray = [];
// // რანდომ რიცხვი: Math.random() * (max - min + 1) + min
// for (let i = 0; i < 10; i++) {
//   const rndNumber = Math.floor(Math.random() * 31 + 20);
//   arr.push(rndNumber);
// }
const myArr = [1, 5, 10, 15, 7, 14, 21];

let maxNumber = myArr[0];
for (let i = 1; i < myArr.length; i++) {
  if (myArr[i] > maxNumber) {
    maxNumber = myArr[i];
  }
}
console.log('maxNumber: ', maxNumber);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArray.push(arr[i]);
//   } else {
//     oddArray.push(arr[i]);
//   }
// }
