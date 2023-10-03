function subsetSum (nums, n, index = 0) {
  // Your code here:

  // let sums = [0];

  // for (let num of nums) {
  //   const sumsCopy = [...sums]
  //   for (let sum of sumsCopy) {
  //     const newSum = num + sum;
  //     if (newSum === n) return console.log(true);
  //     sums.push(newSum);
  //   }
  // }
  // return console.log(false);

if (n === 0) return console.log(true);
if (n < 0) return console.log(false);
if (index > nums.length) return console.log(false);

return (subsetSum(nums, n - nums[index], index + 1) || subsetSum(nums, n, index + 1))

}

module.exports = subsetSum

subsetSum ([1,10,5,3], 9)
subsetSum ([1,10,5,3], 19)
subsetSum ([1,10,5,3], 17)
subsetSum ( [1,10,5,3], 2)
subsetSum ([1,10,5,3], 10)