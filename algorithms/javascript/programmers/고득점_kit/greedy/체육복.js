const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

function solution(n, lost, reserve) {
  const students = {};
  let ans = 0;

  for (let i = 1; i <= n; i++) students[i] = 1;

  lost.forEach((l) => students[l]--);
  reserve.forEach((r) => students[r]++);

  // for (let i = 1; i <= n; i++) {
  //   if (students[i] === 2 && students[i - 1] === 0) {
  //     students[i - 1]++;
  //     students[i]--;
  //   } else if (students[i] === 2 && students[i + 1] === 0) {
  //     students[i + 1]++;
  //     students[i]--;
  //   }
  // }

  for (let key in students) {
    if (students[+key] === 2 && students[+key - 1] === 0) {
      students[+key - 1]++;
      students[+key]--;
    } else if (students[+key] === 2 && students[+key + 1] === 0) {
      students[+key + 1]++;
      students[+key]--;
    }
  }

  for (let key in students) if (students[key] > 0) ans++;

  return ans;
}
