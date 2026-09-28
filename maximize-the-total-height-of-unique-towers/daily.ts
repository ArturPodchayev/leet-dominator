function maxDepth(s: string): number {
    let leftBracket : number = 0;
    const result : number[] = []
    for (let item of s) {
        if (item === '(') {
            leftBracket++
        }
        if (item === ')') {
            leftBracket--
        }
        result.push(leftBracket)
    }
    return Math.max(...result)
};
