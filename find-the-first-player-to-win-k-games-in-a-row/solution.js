/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function(skills, k) {
    let n = skills.length;

    if (k >= n) {
        return skills.indexOf(Math.max(...skills));
    }
    let currWinIndex =0;
    let currWins = 0;

    for(let i=1;i<n;i++){
        if(skills[i]>skills[currWinIndex]){
            currWinIndex = i;
            currWins = 0;
        }
        currWins++;
        if(currWins==k) return currWinIndex
    }
    return currWinIndex;  
};
