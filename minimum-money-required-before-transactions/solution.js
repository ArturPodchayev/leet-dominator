/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function(transactions) {
    let lossProductMaxCashback=0;
    let profitProductMaxPrice=0;
    let cost=0;
    for(let i=0;i<transactions.length;i++){
        if(transactions[i][0]>transactions[i][1]){//loss product
            lossProductMaxCashback = Math.max(lossProductMaxCashback,transactions[i][1]);
            cost += transactions[i][1]-transactions[i][0];
        }else{
            profitProductMaxPrice = Math.max(profitProductMaxPrice,transactions[i][0]);
        }
    }
    let ans = -1*(cost  -1*lossProductMaxCashback);
    if(profitProductMaxPrice-lossProductMaxCashback>0){//After purchasing all loss products. If we need to purchase a profit product which can ask for more money
        ans += (profitProductMaxPrice-lossProductMaxCashback)
    }
    return ans;
};
