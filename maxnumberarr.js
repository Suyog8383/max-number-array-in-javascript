// let num = [22, 33, 11, 88, 99, 44, 55];
// function findMaxVal(num) {
//   let max = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//       max = num[i];
//     }
//   }
//   return max;
// }
// console.log(findMaxVal(num));

let num = [22, 33, 11, 88, 99, 44, 55];
function findMaxVal(num) {
  let result = num.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  }, 0);
  return result;
}
console.log(findMaxVal(num));
