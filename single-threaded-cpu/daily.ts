function sumCounts(nums: number[]): number {
    function calculatePreviousIndices(nums: number[]): number[] {
        const lastOccurrence = Array(100001).fill(-1);
        const prevIndices = Array(nums.length).fill(-1);

        for (let i = 0; i < nums.length; i++) {
            prevIndices[i] = lastOccurrence[nums[i]];
            lastOccurrence[nums[i]] = i;
        }

        return prevIndices;
    }

    const MOD = 1e9 + 7;
    const prevIndices = calculatePreviousIndices(nums);
    const segmentTree = new SegmentTree(0, nums.length - 1);
    let squareSum = 0;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        const diff = i - 1 - prevIndices[i] + 2 * segmentTree.querySum(prevIndices[i] + 1, i - 1);
        squareSum += diff + 1;
        segmentTree.incrementRange(prevIndices[i] + 1, i);
        res = (res + squareSum) % MOD;
    }

    return res;
};

class SegmentTree {
    private low: number;
    private high: number;
    private mid: number;
    private reserve: number;
    private value: number;
    private isLeaf: boolean;
    private left: SegmentTree | null;
    private right: SegmentTree | null;

    constructor(low: number, high: number) {
        this.low = low;
        this.high = high;
        this.reserve = 0;
        this.value = 0;
        this.isLeaf = false;
        this.left = null;
        this.right = null;

        if (low < high) {
            this.mid = Math.floor((low + high) / 2);
            this.left = new SegmentTree(low, this.mid);
            this.right = new SegmentTree(this.mid + 1, high);
        } 
        else {
            this.isLeaf = true;
        }
    }

    incrementRange(low: number, high: number): void {
        if (this.isLeaf) {
            this.value++;
            return;
        }

        if (low === this.low && high === this.high) {
            this.reserve++;
            return;
        }

        this.value += high - low + 1;

        if (low <= this.mid) {
            this.left!.incrementRange(low, Math.min(this.mid, high));
        }

        if (high >= this.mid + 1) {
            this.right!.incrementRange(Math.max(this.mid + 1, low), high);
        }
    }

    querySum(low: number, high: number): number {
        if (this.reserve) {
            this.propagate();
        }

        if (this.isLeaf) return this.value;
        if (low === this.low && high === this.high) return this.value;

        let sum = 0;
        if (low <= this.mid) {
            sum += this.left!.querySum(low, Math.min(this.mid, high));
        }
        
        if (high >= this.mid + 1) {
            sum += this.right!.querySum(Math.max(this.mid + 1, low), high);
        }

        return sum;
    }

    private propagate(): void {
        this.value += this.reserve * (this.high - this.low + 1);

        if (!this.isLeaf) {
            this.left!.reserve += this.reserve;
            this.right!.reserve += this.reserve;
        }

        this.reserve = 0;
    }
}
