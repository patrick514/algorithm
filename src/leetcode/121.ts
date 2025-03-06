function maxProfit(prices: number[]) {
    // let profit = 0
    // let buy = 0
    // let sell = 0
    // let j = 0
    // for (let i = 0; i < prices.length; ++i) {

    //     for (j = i + 1; j < prices.length; ++j) {
    //         // console.log(i, j)
    //         if (prices[j] > prices[i] && (prices[j] - prices[i]) >= profit) {
    //             buy = prices[i]
    //             sell = prices[j]
    //             profit = sell - buy
    //         }
    //     }

    // }
    // return sell - buy
    let profit = 0
    let min = prices[0]
    // let min = prices[0]
    for(let i = 0; i< prices.length;++i){
        if(prices[i] < min){
            min = prices[i]
        }else if(prices[i] - min >= profit){
            profit = prices[i] - min
        }
    }
    return profit

};



console.log(maxProfit([2,4,1]))