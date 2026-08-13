function minOperations(nums: number[]): number[] {

    let binArray = new Array(5000).fill("")
    let paliArray = [];
    let closestPali = new Array(5000).fill(Infinity);

    const isPalindrome = (numStr) => {
        let numArray = numStr.split('')
        let l = 0;
        let r = numArray.length-1;
        while(l<=r) {
            if(numArray[l] !== numArray[r]) return false;
            l++
            r--
        }
        return true;
    }
    
    let lastPali = -1;
    for(let i = 0; i<binArray.length; i++) { 
        binArray[i] = (i+1).toString(2) 
        paliArray[i] = isPalindrome(binArray[i])
        if(paliArray[i]) { closestPali[i] = 0 }
    }


    for(let i = 1; i < 5000; i++){
       if(closestPali[i-1] + 1 < closestPali[i]) {
           closestPali[i] = closestPali[i-1]+1;
       }
    }

    for(let i = 5000-1; i >= 0; i--){
       if(closestPali[i+1] + 1 < closestPali[i]) {
           closestPali[i] = closestPali[i+1]+1;
       }
    }

    let result = [];

    for(let i = 0; i<nums.length; i++) {
        if(nums[i] == 0) {
            result.push(0)
        } else {
            result.push(closestPali[nums[i] -1])
        }
    }

    return result;
};
