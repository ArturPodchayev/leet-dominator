function minimumOperations(nums: number[], start: number, goal: number): number {
    let currentLevel:Array<[number, number]> = [[start , 0]];
    let nextLevel:Array<[number, number]> = [];
    const operations = 
        [
            (n:number, m:number) => n + m,
            (n:number, m:number) => n - m,
            (n:number, m:number) => n ^ m,
        ]
    const visited = new Set([start]);
    while(currentLevel.length){
        const [current, numberOfOperations] = currentLevel.shift();
        if(current === goal)
            return numberOfOperations;
        
        if(current >= 0 && current <= 1000){
            for(const num of nums){
                for(const operation of operations){
                    const next = operation(current, num);
                    if(!visited.has(next)){
                        visited.add(next)
                        nextLevel.push([next, numberOfOperations + 1]);
                    } 
                }
            }
        }
        if(!currentLevel.length)
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
    return -1;
};
