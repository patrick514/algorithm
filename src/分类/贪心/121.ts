// function maxProfit(prices: number[]) {
//     // let profit = 0
//     // let buy = 0
//     // let sell = 0
//     // let j = 0
//     // for (let i = 0; i < prices.length; ++i) {

//     //     for (j = i + 1; j < prices.length; ++j) {
//     //         // console.log(i, j)
//     //         if (prices[j] > prices[i] && (prices[j] - prices[i]) >= profit) {
//     //             buy = prices[i]
//     //             sell = prices[j]
//     //             profit = sell - buy
//     //         }
//     //     }

//     // }
//     // return sell - buy
//     let profit = 0
//     let min = prices[0]
//     // let min = prices[0]
//     for(let i = 0; i< prices.length;++i){
//         if(prices[i] < min){
//             min = prices[i]
//         }else if(prices[i] - min >= profit){
//             profit = prices[i] - min
//         }
//     }
//     return profit
// };


function maxProfit(prices: number[]): number {
  let profit = 0;
  let min = prices[0];
  //我们需要知道第 i 天之前，股票价格的最小值是什么，
  // 也就是从 prices[0] 到 prices[i−1] 的最小值，把它作为买入价格
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (profit <= prices[i] - min) {
      profit = prices[i] - min;
    }
  }
  return profit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]));