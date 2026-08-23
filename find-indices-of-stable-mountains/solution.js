/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {

    let arr=[]

    for (let i = 0; i < height.length - 1; i++) {
        if (height[i] > threshold) {
            arr.push(i + 1)
        }

    }

    return arr


    
};
