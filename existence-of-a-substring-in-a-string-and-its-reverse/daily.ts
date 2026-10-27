function createGrid(m: number, n: number): string[] {
    let ans: string[] = new Array()

    for (let i: number = 0; i < m; i++)
        ans.push("." + (i == m - 1 ? "." : "#").repeat(n - 1))

    return ans
};
