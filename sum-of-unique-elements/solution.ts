function sumOfUnique(nums: number[]): number {
    let dict: {[key:number]:number} = [];
    nums.forEach(item =>{
        if(dict[item])
            dict[item]++;
        else 
            dict[item] = 1;
    })

    let sum = 0;
    for(let key in dict)
        if(dict[key] === 1)
            sum += parseInt(key);

    return sum;
};
