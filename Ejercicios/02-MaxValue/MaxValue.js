function MaxValue (shares) {
  // Your code here:

  // let ganancia = -Infinity;
  // for (let i = 0; i < shares.length; i++) {
  //   for (let j = i + 1; j < shares.length; j++) {
  //     if (ganancia < shares[j] - shares[i]) {
  //       ganancia = shares[j] - shares[i]
  //     }
  //   }
  // }
  // return ganancia;

    let minPrice = shares[0]; // Initialize the minimum price to the first element
    let maxProfit = 0;       // Initialize the maximum profit to 0
  
    for (let i = 1; i < shares.length; i++) {
      // Calculate the profit if we sell at the current price
      const currentProfit = shares[i] - minPrice;
  
      // Update the maximum profit if the current profit is greater
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
  
      // Update the minimum price if we find a smaller price
      if (shares[i] < minPrice) {
        minPrice = shares[i];
      }
  
    return maxProfit;
  }
}

console.log(MaxValue([1,2,4,7,3]));
console.log(MaxValue([11,9,5,4,1]));

module.exports = MaxValue
