function recoverOrder(order: number[], friends: number[]): number[] {
    const hasF: boolean[] = Array(102).fill(false);
    for (const f of friends) hasF[f] = true;

    const ans: number[] = [];
    for (const i of order) {
        if (hasF[i]) ans.push(i);
    }
    return ans;
}
