function scoreOfParentheses(s: string): number {
    const stack: number[] = [];
    let curr = 0;
    
    Array.from(s).forEach(char => {
        if (char === "(") {
            stack.push(curr);
            curr = 0;
        } else curr += stack.pop() + Math.max(curr, 1);
    });
    
    return curr;
};
