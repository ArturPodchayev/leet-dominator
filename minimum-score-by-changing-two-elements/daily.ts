type LL = bigint;

function solve(src: number, target: number, adj: Array<Array<[number, number]>>, n: number, threshold: LL): LL {
    const maxi: LL = BigInt(Number.MAX_SAFE_INTEGER) / BigInt(4);
    const dist: LL[] = new Array(n).fill(maxi);
    dist[src] = BigInt(0);
    const pq = new MyPriorityQueue<{ d: LL; u: number }>(
        (a, b) => a.d < b.d || (a.d === b.d && a.u < b.u)
    );
    pq.push({ d: BigInt(0), u: src });

    while (!pq.isEmpty()) {
        const { d, u } = pq.pop()!;
        if (d > dist[u]) continue;
        if (u === target) return d;
        for (const [v, w] of adj[u]) {
            if (BigInt(w) < threshold) continue; // Skip edges below threshold
            const newDist = d + BigInt(w);
            if (dist[v] > newDist) {
                dist[v] = newDist;
                pq.push({ d: newDist, u: v });
            }
        }
    }
    return maxi;
}

function findMaxPathScore(edges: [number, number, number][], online: boolean[], k: LL): number {
    const n = online.length;
    // Precompute valid edges where both nodes are online
    const validEdges: [number, number, number][] = edges.filter(
        ([u, v, _]) => online[u] && online[v]
    );
    // Precompute max edge weight for binary search range
    let maxWeight = BigInt(0);
    for (const [, , c] of validEdges) {
        maxWeight = BigInt(Math.max(Number(maxWeight), c));
    }

    let l: LL = BigInt(0),
        h: LL = maxWeight,
        best: LL = BigInt(-1);

    // Create adjacency list once
    const adj: Array<Array<[number, number]>> = Array.from({ length: n }, () => []);
    for (const [u, v, c] of validEdges) {
        adj[u].push([v, c]);
    }

    while (l <= h) {
        const mid = l + (h - l) / BigInt(2);
        const dist = solve(0, n - 1, adj, n, mid);
        if (dist <= k) {
            best = mid;
            l = mid + BigInt(1);
        } else {
            h = mid - BigInt(1);
        }
    }
    return Number(best);
}

// Simple MyPriorityQueue implementation for TypeScript
class MyPriorityQueue<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => boolean;

    constructor(compare: (a: T, b: T) => boolean) {
        this.compare = compare;
    }

    push(item: T): void {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): T | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();
        const result = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return result;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (!this.compare(this.heap[index], this.heap[parent])) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest])) {
                smallest = left;
            }
            if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest])) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
