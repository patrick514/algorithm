function maxProfit(prices: number[]): number {
    let profit = 0
    for(let i = 0; i<prices.length;++i){
        if(prices[i+1] > prices[i]){
            profit+= prices[i+1] - prices[i]
        }
    }
    return profit
};

console.log(maxProfit([1,2,3,4,2]))