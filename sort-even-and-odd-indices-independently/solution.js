var sortEvenOdd = function(nums) {
    let even = [];
    let odd = [];
    let evenIndex = 0;
    let oddIndex = 0;
    let result = [];
    for(let i = 0; i < nums.length; i++){
        if(i%2 == 0) even.push(nums[i]);
        else odd.push(nums[i]);
    }
    even.sort((a,b)=>a-b);
    odd.sort((a,b)=>b-a);
    for(let i = 0; i < nums.length; i++){
        if (i % 2 === 0) {
            result.push(even[evenIndex]);
            evenIndex++;
        }

        else {
            result.push(odd[oddIndex]);
            oddIndex++;
        }
    }
    return result;
};
