function SumArray (arr, n) {
  // Your code here:

// for ( let i = 0; i <arr.length; i++) {
//   for (let j = i + 1; j <arr.length; j++) {
//     if (arr[i] + arr[j] === n) return console.log(true);
//   }
// }
// return console.log(false)

const visitedNumbers = new Set([]);

for (let num of arr) {

  const complement = n - num;

  if(visitedNumbers.has(complement)) return console.log(true);
  visitedNumbers.add(num)
}
return console.log(false)
};


module.exports = SumArray

SumArray([2,4,5,9], 9)
SumArray([2,4,5,9], 12)
