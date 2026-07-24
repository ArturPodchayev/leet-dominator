/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    
    let n = nums.length;
    
    let unique = [...new Set(nums)];

    let maxVal = Math.max(...nums);

    let bitLength = 0;
    
    let temp = maxVal;
    while (temp > 0) {
        bitLength++;
        temp = temp >> 1; 
    }

    const MAX_XOR = 1 << bitLength; 

    // create pair first.
    // bound by the MAX_XOR size
    const pairs = new Array(MAX_XOR).fill(0);

    for (let i = 0; i < unique.length; i++) {
        for (let j = i; j < unique.length; j++) {
            pairs[unique[i] ^ unique[j]] = 1;
        }
    }

    //Create the triplet tracker and fill it with 0
    const triplets = new Array(MAX_XOR).fill(0);
    let uniqueCount = 0;

    for (let p = 0; p < MAX_XOR; p++) {
        if (pairs[p] === 1) {
            for (let i = 0; i < unique.length; i++) {
                const tripletVal = p ^ unique[i];
                
                if (triplets[tripletVal] === 0) {
                    triplets[tripletVal] = 1;
                    uniqueCount++;
                }
            }
        }
    }    

    return uniqueCount;

};
