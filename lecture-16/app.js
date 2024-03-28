// let userInputStart = Number(prompt('Enter a number'));
// const userInputEnd = Number(prompt('Enter a number'));

// while (userInputStart < userInputEnd) {
//   console.log(userInputStart);
//   userInputStart++;
// }

// let userInput = 5;
// do {
//   userInput = Number(prompt('Enter a number between 50 and 100'));
// } while (userInput < 50 || userInput > 100);

// let counter = 2;
// let factorial = 1;
// while (counter <= userInput) {
//   factorial *= counter; // factorial = factorial * counter
//   counter++;
// }

// // 5ის ფაქტორიალი -> 1 * 2 * 3 * 4 * 5 = 120

// console.log({ factorial });

// შექმენით გამრავლების ტაბულა
// let firstIndex = 1;
// let secondIndex = 1;
// while (firstIndex <= 10) {
//   debugger;
//   while (secondIndex <= 10) {
//     console.log(`${firstIndex} * ${secondIndex} = ${firstIndex * secondIndex}`);
//     secondIndex++;
//   }
//   secondIndex = 1;
//   firstIndex++;
// }

// firstIndex = 1, secondIndex = 1 -> 1 * 1 = 1
// firstIndex = 1, secondIndex = 2 -> 1 * 2 = 2
// firstIndex = 1, secondIndex = 3 -> 1 * 3 = 3
// firstIndex = 1, secondIndex = 4 -> 1 * 4 = 4
// firstIndex = 1, secondIndex = 5 -> 1 * 5 = 5
// firstIndex = 1, secondIndex = 6 -> 1 * 6 = 6
// firstIndex = 1, secondIndex = 7 -> 1 * 7 = 7
// firstIndex = 1, secondIndex = 8 -> 1 * 8 = 8
// firstIndex = 1, secondIndex = 9 -> 1 * 9 = 9
// firstIndex = 1, secondIndex = 10 -> 1 * 10 = 10
// firstIndex = 2, secondIndex = 1 -> 2 * 1 = 2
// firstIndex = 2, secondIndex = 2 -> 2 * 2 = 4

let userInput;

// do {
//   userInput = Number(prompt('Enter a number between 1 and 100'));
// } while (userInput < 0 || userInput > 100);

userInput = 9;
let isPrime = true;
let counter = 2;
while (counter < Math.floor(userInput / 2)) {
  debugger;
  if (userInput % counter === 0) {
    isPrime = false;
    break;
  }
  counter++;
}

// if (isPrime) {
//   console.log(`${userInput} is a prime number`);
// } else {
//   console.log(`${userInput} is not a prime number`);
// }

// თუ პირობა, ამ შემთხვევაში isPrime ჭეშარიტია, გააკეთე ბრძანება კითხვნის ნიშნის შემდეგ
// რაც დაწერია, თუ არადა, გააკეთე ბრძანება, რაც ორი წერტილის შემდეგ წერია
isPrime
  ? console.log(`${userInput} is a prime number`)
  : console.log(`${userInput} is not a prime number`);

// 5 === 5 ? console.log('5 is 5') : console.log('5 is not 5');

console.log(
  isPrime
    ? `${userInput} is a prime number`
    : `${userInput} is not a prime number`
);

// 97 % 2 === 1
// 97 % 3 === 1
// 97 % 4 === 1
// 97 % 5 === 2
