/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    for(let num1 of arr1){
        let isValid = true;
        for(let num2 of arr2){
            let diff = Math.abs(num1-num2);
            if(diff <= d){
                isValid = false;
                break;
            }
        }
        if(isValid){
            count++;
        }
    }
    return count;
};
