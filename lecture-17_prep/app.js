// // სურათი 2:
// const userName = 'admin';
// const age = 21;
// const isVip = true;

// if (age >= 21) {
//   console.log('You are allowed to drink alcohol');
//   if (isVip || userName === 'admin') {
//     console.log('You can enter VIP zone');
//   } else {
//     console.log('You are not allowed to enter VIP zone');
//   }
// } else {
//   console.log('You are not allowed to drink alcohol');
// }

let num = 123;
let newNum = 0;
while (num > 0) {
  newNum = newNum * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log(newNum);

for (let i = 10; i < 100; i++) {
  if (i % 3 === 0 && i % 6 !== 0) {
    console.log(i);
  }
}

let counter = 10;
while (counter < 10) {
  if (counter % 3 === 0 && counter & (6 === 0)) {
    console.log(i);
  }
  counter++;
}

for (let i = 50; i < 100; i++) {
  const newNumber = Math.floor(Math.random() * (100 - 50 + 1) + 50);
  if (newNumber % 2 === 1) {
    console.log(`This is a random odd number between 50 and 100: ${newNumber}`);
  } else {
    console.log(
      `This is a random even number between 50 and 100: ${newNumber}`
    );
  }
}

const randomNumber1 = Math.floor(Math.random() * (50 - 20 + 1) + 20);
const randomNumber2 = Math.floor(Math.random() * (50 - 20 + 1) + 20);
let sum = 0;
let average = 0;
for (let i = randomNumber1; i < randomNumber2; i++) {
  sum += i;
}
average = sum / randomNumber2 - randomNumber1;
console.log(
  `This is the sum of numbers between ${randomNumber1} and ${randomNumber2} is ${sum}`
);
console.log(
  `This is the average of numbers between ${randomNumber1} and ${randomNumber2} is ${average}`
);

// go through the loop 1 to 10
