function numberOfComponents(properties: number[][], k: number): number {
    const n = properties.length
    const m = properties[0].length
    let numComponents = n
    const unionFind = new UnionFind(n)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (intersect(properties[i], properties[j]) >= k) {
                const unioned = unionFind.union(i, j)
                if (unioned) numComponents--
            }
        }
    }
    return numComponents
};

function intersect(a: number[], b: number[]): number {
    const setA = new Set(a)
    const setB = new Set(b)
    let count = 0
    for (let num of setA) {
        if (setB.has(num)) count++
    }
    return count
}

class UnionFind {
    parent: number[]
    rank: number[]
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i)
        this.rank = new Array(n).fill(0)
    }

    find(i: number): number {
        if (this.parent[i] === i) return i
        return this.parent[i] = this.find(this.parent[i])
    }

    union(i: number, j: number): boolean {
        const rootI = this.find(i)
        const rootJ = this.find(j)
        if (rootI === rootJ) return false
        if (this.rank[rootI] < this.rank[rootJ]) {
            this.parent[rootI] = rootJ
        } else if (this.rank[rootJ] < this.rank[rootI]) {
            this.parent[rootJ] = rootI
        } else {
            this.parent[rootI] = rootJ
            this.rank[rootJ]++
        }
        return true
    }
}
