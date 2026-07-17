class Solution {
    func minimumNumbers(_ num: Int, _ k: Int) -> Int {
        if num == 0 { return 0 }
        if k == 0 {
            if num % 10 == 0 { return 1 }
            else { return -1 }
        }
        var ans = 1
        while (k * ans <= num) {
            if (num - k * ans) % 10 == 0 { return ans }
            ans += 1
        }
        return -1
    }
}
