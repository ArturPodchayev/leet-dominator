/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let tiring=0
    let nonTiring=0
    let max = 0
    for(let i=0;i<hours.length;i++){
        for(let j=i;j<hours.length;j++){
            if(hours[j]>8){
                tiring++
            }else{
                nonTiring++
            }
            if(tiring>nonTiring){
                max=Math.max(j-i+1,max)
            }
        }
        tiring=0
        nonTiring=0
    }
    return max
};
