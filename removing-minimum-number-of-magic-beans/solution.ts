function minimumRemoval(beans: number[]): number {
    // Sort beans to know after each position how many beans to remove
    beans.sort((a,b)=>a-b); // -- O(nlogn)

    let len = beans.length;
    let minBeansToRemove = 0;
    // Total Beans
    let sum = beans.reduce((total, current)=> total+current);

    // 1. Traversing through array 
    // 2. Finding out how many beans will be there if we're at current index i
    // 3. All the beans before i will be removed 
    // 4. From ith index each position should have exact of i beans
    // 5. we calculate maximum beans to keep 
    // 6. and remove them from total then we'll have count of beans to remove
    for(let i=0; i<beans.length ; i++){
        minBeansToRemove = Math.max(minBeansToRemove, beans[i]*(len-i));
    }

    return sum-minBeansToRemove;
};
