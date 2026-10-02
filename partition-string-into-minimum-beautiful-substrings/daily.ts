function solve(res: string[], stack: number, s: string, n: number): void {
    if(stack < 0 || s.length > 2*n) return;
    if(s.length == 2*n && stack == 0) {
        res.push(s);
        return;
    }
    solve(res, stack+1, s+'(', n);
    solve(res, stack-1, s+')', n);
}

function generateParenthesis(n: number): string[] {
    let res: string[] = [];
    solve(res, 0, '', n);
    return res;
};
