//take in an array of prices and returns the max possible profit for the day. 
// in other words, find the lowest point and the highest point. Subtract the value from the highest to the lowest and return that value. 
const maxStockProfit = (priceArr) => {

  let sorted = priceArr.sort((a,b) => a-b);
  console.log(sorted);
  let maxProfit = sorted[sorted.length - 1] - sorted[0] > 0 ? sorted[sorted.length - 1] - sorted[0] : -1;
  return maxProfit;
  
};

let stock = [32,46,26,38,40,48,42];//22

console.log(maxStockProfit(stock));

export default maxStockProfit