let cardNumArr = [
  '1111-1111-1111-1111',
  '2222-2222-2222-2222',
  '3333-3333-3333-3333',
];

for (let i = 0; i < cardNumArr.length; i++) {
  cardNumArr[i] = cardNumArr[i].split('');
  for (let j = 0; j < cardNumArr[i].length; j++) {
    if (j === 7 || j === 8 || j === 10 || j === 11 || j === 12 || j === 13) {
      cardNumArr[i][j] = '*';
    }
  }
  cardNumArr[i] = cardNumArr[i].join('');
}
console.log(cardNumArr);

// for (let i = 0; i < cardNum.length; i++) {
//   if (i === 7 || i === 8 || i === 10 || i === 11 || i === 12 || i === 13) {
//     cardNum[i] = '*';
//   }
// }

// cardNum = cardNum.join('');
// console.log(cardNum);

// map 돌면서 data 내 cardNum parameter로 받아와 *로 변경
