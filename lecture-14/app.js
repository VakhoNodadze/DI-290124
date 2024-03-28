// //დაწერეთ რა?სად?როდის? ტიპის თამაში, დაუსვით მომხმარებელს 3 კითხვა
// //სავარაუდო 4 პასუხით  დაელოდეთ მომხმარებლის მიერ შემოტანილ პასუხს ყოველი
// //დასმული კითხვის შემდეგ და დაითვალეთ თუ რამდენ კითხვას უპასუხებს მომხმარებელი
// //სწორად. Შედეგი გამოიტანეთ ეკრანზე ან კონსოლში
// // const question1 = prompt(
// //   `
// //     რა არის საქართველოს დედაქალაქი?
// //       შეიყვანეთ შესაბამისი რიცხვი.
// //       1. თბილისი
// //       2. ბათუმი
// //       3. ქუთაისი
// //       4. რუსთავი
// //     `
// // );
// // const question2 = prompt(
// //   `
// //       რა არის გერმანიის დედაქალაქი?
// //         შეიყვანეთ შესაბამისი რიცხვი.
// //         1. კოპენჰაგენი
// //         2. ბერლინი
// //         3. რიგა
// //         4. მუნიხი
// //       `
// // );

// // const question3 = prompt(
// //   `
// //         რა არის ამერიკის დედაქალაქი?
// //           შეიყვანეთ შესაბამისი რიცხვი.
// //           1. ნიუ იორკი
// //           2. ბერლინი
// //           3. ლოს ანჯელესი
// //           4. ვაშინგტონი
// //         `
// // );
// // if (question1 === 1) {
// //   alert('სწორი პასუხია, თბილისი');
// // }
// // let correctAnswers = 0;
// // if (question1 == 1) {
// //   correctAnswers = correctAnswers + 1;
// //   alert(`სწორი პასუხია, თბილისი`);
// // } else if (question1 == 2) {
// //   console.log('ბათუმი შემოწმება');
// //   alert(`არასწორი პასუხია, ბათუმი`);
// // } else if (question1 == 3) {
// //   console.log('ქუთაისი შემოწმება');
// //   alert(`არასწორი პასუხია, ქუთაისი`);
// // } else if (question1 == 4) {
// //   console.log('რუსთავი შემოწმება');
// //   alert(`არასწორი პასუხია, რუსთავი`);
// // } else {
// //   console.log('არასწორი პასუხი');
// //   alert(`არასწორი პასუხი`);
// // }

// // if (question2 == 2) {
// //   correctAnswers += 1; // იდენტურია როგორც correctAnswers = correctAnswers + 1;
// // }
// // if (question3 == 4) {
// //   correctAnswers++; // იდენტურია როგორც correctAnswers = correctAnswers + 1;

// //   //   ++correctAnswers; // იდენტურია როგორც correctAnswers = correctAnswers + 1;
// // }

// // alert(`თქვენ გაეცით ${correctAnswers} სწორი პასუხი 3-დან`);
// // console.log(`თქვენ გაეცით ${correctAnswers} სწორი პასუხი 3-დან`);

// const isDressedNice = prompt('გაცვიათ თუ არა დრესკოდის შესაბამისად? კი/არა');
// const userAge = prompt('რამდენი წლის ხარ?');

// // userAge = 19, isDressedNice = 'არა',|  არ შევა
// // userAge = 20, isDressedNice = 'არა',|  შევა
// // userAge = 21, isDressedNice = 'არა',|  არ შევა
// // userAge = 21, isDressedNice = 'კი',|  შევა
// // console.log(
// //   (userAge >= 18 && isDressedNice === 'კი') || Number(userAge) === 20
// // );
// if (isNaN(userAge) === false) {
//   if (!((userAge >= 18 && isDressedNice === 'კი') || Number(userAge) === 20)) {
//     alert('დაიშვებით');

//     const userName = prompt('რა არის შენი სახელი?');
//     const isVIP = prompt('გაქვთ თუ არა VIP ბილეთი? კი/არა');
//     const isWearingBlackGlasses = prompt(
//       'გაქვთ თუ არა შავი სათვალეები? კი/არა'
//     );

//     if (
//       isVIP == 'კი' ||
//       userName === 'ვახტანგ' ||
//       isWearingBlackGlasses === 'კი'
//     ) {
//       alert('შეგიძლია შეხვიდე VIP ლაუნჯში');
//     }
//   } else {
//     alert('არ დაიშვებით');
//   }
// }

// console.log(isNaN(123)); // false
// console.log(Number('123'));
// console.log(Number('123vaxo'));
// console.log(parseInt('123vaxo'));

// შექმენით კალკულატორი, კალკულატორს უნდა შეეძლოს მომხმარებლის მიერ შემოტანილ 2 რიცხვზე
//გარკვეული მათემატიკური ოპერაციის შესრულება რომელსაც მომხმარებელი აირჩევს, მათემატიკური
//მოქმედებები შემდეგია („+“ , “ –„ , “ *“ , “ /“ , “ =“ )
const number1 = prompt('შეიყვანეთ პირველი რიცხვი');
const number2 = prompt('შეიყვანეთ მეორე რიცხვი');
const operator = prompt('შეიყვანეთ ოპერატორი: +, -, *, /');

// if (operator === '+') {
//   alert(Number(number1) + Number(number2));
// } else if (operator === '-') {
//   alert(Number(number1) - Number(number2));
// } else if (operator === '*') {
//   alert(Number(number1) * Number(number2));
// } else if (operator === '/') {
//   alert(Number(number1) / Number(number2));
// } else {
//   alert('შემოიყვანეთ სწორი ოპერატორი შემდეგში');
// }

switch (operator) {
  case '+':
    console.log(Number(number1) + Number(number2));
  case '-':
    console.log(Number(number1) - Number(number2));
    break;
  case '*':
    console.log(Number(number1) * Number(number2));
    break;
  case '/':
    console.log(Number(number1) / Number(number2));
    break;
  default:
    console.log('შემოიყვანეთ სწორი ოპერატორი შემდეგში');
    break;
}

Math.sqrt(9); // 3
Math.pow(2); // 4
