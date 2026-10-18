const factorial = (n: number) => {
    let result = 1n;
    for (let i = 1n; i <= n; i++)
        result = (result * i);
    return result;
}

const recurse = (nums: number[]) => {
    if(nums.length === 0) return 1n;
    if(nums.length === 1) return 1n;
    let left:number[] = [];
    let right:number[] = [];
    let root = nums[0];
    for(let i=1; i<nums.length; i++) {
        if(nums[i] > root) right.push(nums[i]);
        else left.push(nums[i]);
    }
    let leftWays =  recurse(left);
    let rightWays = recurse(right);
    let facLeftRight = factorial(left.length+right.length);
    let facLeft = factorial(left.length);
    let facRight = factorial(right.length);
    let t = facLeftRight/(facLeft*facRight);
    // console.log(facRight)
    t = t*leftWays*rightWays;
    return t;
}

function numOfWays(nums: number[]): number {
    let res = recurse(nums);
    return Number((res-1n)%BigInt(10**9+7)); //-1 original order
};
