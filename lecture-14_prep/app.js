// @ts-nocheck
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");

// var fullName = firstName + " " + lastName;
// var fullName = `${firstName} ${lastName}`;

// console.log(fullName);
// document.write(fullName);

// var number1 = prompt("Enter first number");
// var number2 = prompt("Enter second number");
// var action = prompt("Enter action (+, -, * or /)");

// var result = "Invalid number";

// if (isNaN(parseInt(number1)) || isNaN(parseInt(number2))) {
//   console.log(result);
// } else {
//   switch (action) {
//     case "+":
//       result = parseInt(number1) + parseInt(number2);
//       break;
//     case "-":
//       result = parseInt(number1) - parseInt(number2);
//       break;
//     case "*":
//       result = parseInt(number1) * parseInt(number2);
//       break;
//     case "/":
//       result = parseInt(number1) / parseInt(number2);
//       break;
//     default:
//       result = "Invalid action";
//   }
//   console.log(result);
// }

// var number = 10.5;
// console.log(Math.ceil(number)); // 11
// console.log(Math.floor(number)); // 10
// console.log(Math.round(number)); // 11
// number = 10.4;
// console.log(Math.ceil(number)); // 11
// console.log(Math.floor(number)); // 10
// console.log(Math.round(number)); // 10
// console.log(Math.pow(number, 3)); // 103.464

// var number1 = prompt("Enter first number"); // 10
// var number2 = prompt("Enter second number"); // 5

// console.log("Before switching the values:");
// console.log("number1 = ", number1);
// console.log("number2 = ", number2);
// console.log("After switching the values");
// გააკეთეთ გაცვლა მნიშვნელობების
// var tempNumber = number1; // tempNumber = 10, number1 = 10, number2 = 5
// number1 = number2; // tempNumber = 10, number1 = 5, number2 = 5
// number2 = tempNumber; // tempNumber = 10, number1 = 5, number2 = 10

// number1 = parseInt(number1) + parseInt(number2); // number1 = 10 + 5 = 15, number2 = 5
// number2 = parseInt(number1) - parseInt(number2); // number1 = 15, number2 = 15 - 5 = 10
// number1 = parseInt(number1) - parseInt(number2); // number1 = 15 - 10 = 5, number2 = 10

// [number1, number2] = [number2, number1]; // ყველაზე მარტივი ვარიანტი

// console.log("number1 = ", number1);
// console.log("number2 = ", number2);

var number1 = 15;
var number2 = 50;
var number3 = 40;
var maxNumber;
var minNumber;

// ეს არასწორი ამონახსნია
// if (number1 > number2) {
//   console.log("max number = ", number1);
// } else if (number2 > number3) {
//   console.log("max number = ", number2);
// } else {
//   console.log("max number = ", number3);
// }

// if (number1 > number2 && number1 > number3) {
//   maxNumber = number1;
// } else if (number2 > number1 && number2 > number3) {
//   maxNumber = number2;
// } else {
//   maxNumber = number3;
// }

// if (number1 < number2 && number1 < number3) {
//   minNumber = number1;
// } else if (number2 < number1 && number2 < number3) {
//   minNumber = number2;
// } else {
//   minNumber = number3;
// }

// console.log("max number is ", maxNumber);
// console.log("min number is ", minNumber);

// დავალება: მომხარებელმა უნდა შეიყვანოს მართკუთხედის გვერდები და ჩვენ უნდა გამოვთვალოთ პერიმეტრი და ფართობი

// var longSide = prompt("Enter long side");
// var shortSide = prompt("Enter short side");

// var perimeter = (parseInt(longSide) + parseInt(shortSide)) * 2;
// var area = parseInt(longSide) * parseInt(shortSide);
// console.log("perimeter = ", perimeter);
// console.log("area = ", area);

// var katet1 = 5;
// var katet2 = 9;
// var hipotenuza;

// hipotenuza = Math.sqrt(Math.pow(katet1, 2) + Math.pow(katet2, 2));
// // hipotenuza = Math.sqrt(hipotenuza);
// console.log(hipotenuza);

// მომხარებელი რა რიცხვსაც შეიყვანს, ჩვენ ის უნდა შევაბრუნოთ და დავუბეჭდოთ იგი. ანუ მაგალთად, თუ მომხარებელი შეიყვანს 123, ჩვენ უნდა დავბეჭდოთ 321
var number1 = 123; // 321
var result = 0;

// 1) იქამდე სანამ number1 მეტია 0ზე, ნაშთიანი გაყოფით, რიცხვი გავყოთ 10ზე
// number1 % 10; // 3
// 2) result გაუტოლეთ result გამრავებული 10ზე და დამატებული ეს ნაშთი
// 3) number1 გავყოთ 10ზე, და დავამგრვალოთ floorით და გაუტოლეთ numbe1
