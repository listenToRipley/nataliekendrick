const maxStockProfit = (priceArr) => {

  let sorted = priceArr.sort((a,b) => a-b);
  // console.log(sorted);
  let maxProfit = sorted[sorted.length - 1] - sorted[0] > 0 ? sorted[sorted.length - 1] - sorted[0] : -1;
  return maxProfit;
  
};

// let stock = [32,46,26,38,40,48,42];//22

// console.log(maxStockProfit(stock));

export default maxStockProfit