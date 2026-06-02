function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {

    let result = [-1, -1];
    for (let i =0; i < nums.length; i++ ) {
        for(let j = 0; j < nums.length; j++) {
            if((Math.abs(i - j) >= indexDifference) && 
                (Math.abs(nums[i] - nums[j]) >= valueDifference)) {
                    result[0] = i;
                    result[1] = j;
                }
        }
    }
    return result;
};
