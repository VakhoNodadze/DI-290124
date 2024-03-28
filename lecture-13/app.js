// დავალება 1
// შემოაყვანინე მომხარებელს საკუთარი სახელი და დაბადების წელი.
// გამოთვალე მისი ასაკი და დაბეჭდე ალერთად და კონსოლში.
// const userName = prompt('შეიყვანეთ სახელი');
// const userBirthYear = prompt('შეიყვანეთ დაბადების წელი');
// const userAge = 2024 - Number(userBirthYear);
// // alert('გამარჯობა ' + userName + ' თქვენი ასაკია ' + userAge);
// alert(`გამარჯობა ${userName} თქვენი ასაკია ${userAge}`);
// console.log('გამარჯობა ', userName, ' თქვენი ასაკია ', userAge);

// დავალება 2
//შექმენით ცვლადი სადაც მომხმარებელს თხოვთ რომ შემოიტანოს საკუთარი ასაკი,
//იმ შემთხვევაში თუ ასაკი მეტია ან ტოლია 18 წლის, თხოვთ რომ შემოიტანოს სახელი
//და გვარი და საბოლოოდ დაბეჭდავთ კონსოლში გამარჯობა “name” “surname”,
//იმ შემთქვევაში თუ ასაკი 18 წელზე ნაკლებია დაბეჭდავთ თქვენ ხართ არასრულწლოვანი

// console.log(`Is 2 equal to 2 ?  ${2 === +'2'}`);
// const isUserAgeNumber = typeof userAge === 'number';
// console.log({ isUserAgeNumber });

// console.log(`Is user input a number ${!isNaN(userAge)}`); // Is Not A Number

// const userAge = prompt('შეიყვანეთ თქვენი ასაკი, გეთაყვა');
// const isUserInputNumber = !isNaN(userAge); // isNaN გვიბრუნებს მასში გადაცემული მნიშვნელობა თუკი არ არის რიცხვი
// // ანუ trueს დააბრუნებს მხოლოდ იმ შემთვხევაში თუ რიცხვი არ არის
// if (isUserInputNumber) {
//   if (userAge >= 18) {
//     const userName = prompt('შეიყვანეთ სახელი');
//     const userSurname = prompt('შეიყვანეთ გვარი');
//     console.log('გამარჯობა', userName, userSurname);
//   } else {
//     alert('თქვენ ხართ არასრულწლოვანი');
//   }
// } else {
//   alert('შეიყვანეთ რიცხვი');
// }

const question1 = prompt(
  `
  რა არის საქართველოს დედაქალაქი?
    შეიყვანეთ შესაბამისი რიცხვი.
    1. თბილისი
    2. ბათუმი
    3. ქუთაისი
    4. რუსთავი
  `
);

// const question2 = prompt(
//   'რა არის საქართველოს დედაქალაქი? \n შეიყვანეთ შესაბამისი რიცხვი. \n 1. თბილისი \n 2. ბათუმი \n 3. ქუთაისი \n 4. რუსთავი'
// );

// let myNumber = 0;
// myNumber = myNumber + 1

if (question1 == 1) {
  alert('სწორი პასუხი');
} else {
  alert('არასწორი პასუხი');
}
