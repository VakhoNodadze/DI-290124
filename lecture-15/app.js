// //გვაქვს მოცემული შემდეგი განტოლება 2 * 2 + 3 * 3 = 5x, სთხოვეთ მომხმარებელს რომ შემოიტანოს
// //Y და Z ცვლადების მნიშვნელობები და დაითვალეთ თუ რას უდრის X ის მნიშვნელობა.

// const zNumber = Number(prompt('Enter z number'));
// const yNumber = Number(prompt('Enter y number'));

// const xNumber = (2 * zNumber - 3 * yNumber) / 5;
// console.log(`X number is: ${xNumber}`);

// //შექმენით ალგორითმი რომელიც დაითვლის მართკუთხა სამკუთხედის ჰიპოტენუზას იმ შემთხვევაში თუ
// //მომხმარებელი შემოიტანს a და b გვერდის(კათეტების) მნიშვნელობებს
// const aNumber = Number(prompt('Enter a number'));
// const bNumber = Number(prompt('Enter b number'));

// // const cNumber = Math.sqrt(aNumber ** 2 + bNumber ** 2);
// const cNumber = Math.sqrt(Math.pow(aNumber, 2) + Math.pow(bNumber));

// Math.ceil(2.5); // 3
// Math.floor(2.5); // 2
// Math.round(2.5); // 3

// const aNumber = prompt('Enter a number between 1 and 10');
// if (!(aNumber >= 1 && aNumber <= 10)) {
//   alert('Please enter a number between 1 and 10');
// }

// let aNumber = prompt('Enter a number between 1 and 10');
// while (aNumber < 1 || aNumber > 10) {
//   alert('Please enter a number between 1 and 10');
//   aNumber = prompt('Enter a number between 1 and 10');
// }

// do {
//   aNumber = prompt('Enter a number between 1 and 10');
// } while (aNumber < 1 || aNumber > 10);

// let userInput;
// while (userInput !== 'yes') {
//   userInput = prompt('Do you want to continue? (yes/no)');
//   // The loop may not execute at all if the user input is initially "yes"
// }

// let userInput;
// do {
//   userInput = prompt('Do you want to continue? (yes/no)');
//   // This loop will execute at least once regardless of the initial user input
// } while (userInput !== 'yes');

// do {
//   alert('do while loop');
// } while (5 < 4);

// while (5 < 4) {
//   alert('while loop');
// }

// let userInput = prompt('Please enter a number between 1 and 10:');
// userInput = Number(userInput);

// while (userInput < 1 || userInput > 10) {
//   userInput = prompt('Please enter a number between 1 and 10:');
//   userInput = Number(userInput);
// }

// let userInput;
// do {
//   userInput = prompt('Please enter a number between 1 and 10:');
//   userInput = Number(userInput); // Convert the input to a number
// } while (isNaN(userInput) || userInput < 1 || userInput > 10);

// დაბეჭდეთ 4ის ჯერადი რიცხვები 1-დან 100-მდე
// let myNumber = 1;
// while (myNumber < 100) {
//   if (myNumber % 2 === 0) {
//     console.log(myNumber);
//   }
//   myNumber++;
// }

// console.log(5 / 2);
// console.log(5 % 2);

// შექმენით ალგორითმი რომელიც დაითვლის თუ რამდენი 4 ის ჯერადი რიცხვია მოთავსებული 0 დან 120 მდე
// let myNumber = 1;
// let counter = 0;
// while (myNumber < 120) {
//   if (myNumber % 4 === 0) {
//     counter++;
//   }
//   myNumber++;
// }

// console.log(
//   `There are ${counter} numbers that are divisible by 4 from 0 to 120`
// );

// შექმენით ალგორითმი რომელიც დაითვლის თუ რამდენი გამყოფი აქვს მომხმარებლის მიერ შემოტანილ რიცხვს
const userNumber = 125;
let dividerCounter = 0; // გამყოფების რაოდენობა
let counter = 1;
while (counter <= userNumber) {
  if (userNumber % counter === 0) {
    dividerCounter++;
  }
  counter++;
}

// [1,5,7,8,10,15] -> 15
