/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sortArr = [...arr].sort((a, b) => a - b);
    let rank = new Map();
    let currentRank = 1;

    for(let num of sortArr) {
        if(!rank.has(num)) {
            rank.set(num, currentRank++);
        }   
    }

    let res = [];
    for(let i = 0; i < arr.length; i++) {
        res.push(rank.get(arr[i]));
    }
    
    return res;
};
