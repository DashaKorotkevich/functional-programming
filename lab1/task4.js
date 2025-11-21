/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        if (prices.length < 2) return 0;
    
    // dp[i] - минимальная цена до i-го дня
    const dp = new Array(prices.length);
    dp[0] = prices[0];
    
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // Минимальная цена до текущего дня
        dp[i] = Math.min(dp[i - 1], prices[i]);
        
        // Максимальная прибыль если продать в текущий день
        maxProfit = Math.max(maxProfit, prices[i] - dp[i]);
    }
    
    return maxProfit;
};