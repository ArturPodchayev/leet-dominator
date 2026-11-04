class Solution {
    func minOperations(_ nums: [Int], _ x: Int, _ k: Int) -> Int {
        let n = nums.count; 
        
        var calc = CostCalculator(n, x)
        var costs = Array(repeating: 0, count: n - x + 1)

        for rhs in nums.indices { 
            if rhs >= x { 
                let lhs = rhs - x
                calc.remove(nums[lhs], lhs)
            }

            calc.insert(nums[rhs], rhs)
            if rhs >= x - 1 { costs[rhs - x + 1] = calc.minCost() }
        }

        //hard part is done!
        var memo = Array(repeating: Array(repeating: -1, count: k + 1), count: costs.count)
        func dp(at i: Int,_ k: Int) -> Int { 
            if k == 0 { return 0 }
            if i >= costs.count { return k == 0 ? 0 : Int.max / 2 }
            if memo[i][k] != -1 { return memo[i][k] }

            let best = min(
                dp(at: i + x, k - 1) + costs[i], //choose 
                dp(at: i + 1, k) //skip
            )

            memo[i][k] = best
            return best
        }

        return dp(at: 0, k)
    }

    struct CostCalculator { 

        internal struct Heaper: Comparable { 
            let v: Int, i: Int 
            init(_ v: Int,_ i: Int) { self.v = v; self.i = i; }
            public static func < (lhs: Heaper, rhs: Heaper) -> Bool { lhs.v == rhs.v ? lhs.i < rhs.i : lhs.v < rhs.v }        
        }

        internal var low = Heap<Heaper>() //max heap
        internal var high = Heap<Heaper>() //min heap
        internal var lowCount = 0
        internal var highCount = 0 
        var lowSum = 0 
        var highSum = 0 
        let windowSize: Int 
        var inLow: [Bool]
        var left: Int = 0 //keeps track of lhs in the window
        // since entries can expire and go out of the window, we need to keep the leftmost position updated to figure out which entries we need to ignore + prune

        init(_ size: Int,_ windowSize: Int) { 
            self.inLow = Array(repeating: false, count: size) 
            self.windowSize = windowSize
        }

        mutating func insert(_ v: Int,_ i: Int) { 
            low.insert(Heaper(v, i)) 
            lowCount += 1; inLow[i] = true; lowSum += v

            moveLowToHigh()
            rebalance()
        }

        mutating func remove(_ v: Int,_ i: Int) { 
            if inLow[i] { lowCount -= 1; lowSum -= v }
            else { highCount -= 1; highSum -= v }
            left = i + 1
            pruneLow(); pruneHigh();
            rebalance()
        }

        internal mutating func moveLowToHigh() { 
            pruneLow()
            guard let top = low.popMax() else { return }
            lowCount -= 1; inLow[top.i] = false; lowSum -= top.v 
            high.insert(top)
            highCount += 1; highSum += top.v
        }

        internal mutating func pruneLow() { 
            while let top = low.max, top.i < left { _ = low.popMax() }
        }

        internal mutating func pruneHigh() {
            while let bottom = high.min, bottom.i < left { _ = high.popMin() }
        }

        internal mutating func rebalance() { 
            // balance left
            while lowCount < highCount, let hi = high.popMin() {
                guard hi.i >= left else { continue } 
                highCount -= 1; highSum -= hi.v; 
                lowCount += 1; lowSum += hi.v; 
                inLow[hi.i] = true; 
                low.insert(hi)
            }

            // balance right
            while highCount + 1 < lowCount, let lo = low.popMax() {
                guard lo.i >= left else { continue }
                lowCount -= 1; lowSum -= lo.v; 
                highCount += 1; highSum += lo.v; 
                inLow[lo.i] = false
                high.insert(lo)
            }
        }

        func minCost() -> Int { 
            let med = low.max!.v 
            return ((med * lowCount) - lowSum) + (highSum - (med * highCount))
        }

    }

}
