var maxNumber = 8;

var triangle = '';
for (let i = 0; i < maxNumber; i++) {
  for (let j = 0; j < maxNumber - i; j++) {
    triangle += '*';
  }
  console.log(triangle);
  triangle = '';
}

// var maxNumber2 = 8;
// var line = '';
// for (var i = 0; i < maxNumber2; i++) {
//   for (var j = 0; j < maxNumber2 - i; j++) {
//     line += '*';
//   }
//   line += '\n';
// }
// console.log(line);

// var start = 0;
// var end = 8;
// var triangle = '';
// while (start < end) {
//   triangle += '*';
//   start++;
//   if (start === end) {
//     console.log(triangle);
//     start = 0;
//     end--;
//     triangle = '';
//   }
// }

// let height = 10;
// let start = 0;
// let finish = 19;
// let row = '';

// for (let i = 0; i < height; i++) {
//   for (let j = 0; j < finish; j++) {
//     if (j < start) {
//       row += '   ';
//       continue;
//     }
//     row += ' * ';
//   }
//   console.log(row);
//   start++;
//   finish--;
//   row = '';
// }
