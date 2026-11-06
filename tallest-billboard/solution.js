/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function (rods) {
    
    // HashMap Approach 
    
    let hm = {0:0}

    for(let rod of rods){
        let tempHm = {...hm}
        for(let height in tempHm){
            height = parseInt(height)
            hm[height + rod] = Math.max(hm[height + rod] || 0, tempHm[height])
            hm[Math.abs(height-rod)] = Math.max(hm[Math.abs(height-rod)] || 0, tempHm[height] + Math.min(height,rod))
        }
    }
    return hm[0] || 0
    
    
    /*

    recursive Approach which will Time Limit Exceeded for hire values

    let max = 0;
    let sum = rods.reduce((a, b) => a + b, 0);
    const recursiveFind = (rods, index, leftSum, rightSum, remain) => {
        if (index < 0) {
            if (leftSum === rightSum && leftSum > max) {
                max = leftSum;
            }
            return;
        }
        if (leftSum + rightSum + remain <= 2 * max || Math.abs(leftSum - rightSum) > remain) return;
        recursiveFind(rods, index - 1, leftSum + rods[index], rightSum, remain - rods[index]);
        recursiveFind(rods, index - 1, leftSum, rightSum + rods[index], remain - rods[index]);
        recursiveFind(rods, index - 1, leftSum , rightSum, remain - rods[index]);
    }
    recursiveFind(rods, rods.length - 1, 0, 0, sum);
    return max;
    */
};
