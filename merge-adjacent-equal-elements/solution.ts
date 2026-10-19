function mergeAdjacent(a: number[]): number[] {
    const ans: number[] = [];
    for (let i = 0; i < a.length; i++) {
        let curr = a[i];
        while (ans.length && ans[ans.length - 1] === curr) {
            ans.pop();
            curr *= 2;
        }
        ans.push(curr);
    }
    return ans;
}
