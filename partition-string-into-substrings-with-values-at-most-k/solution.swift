class Solution {
    func minimumPartition(_ s: String, _ k: Int) -> Int {
        var arr = Array(s)
        var cnt = 1; var n = arr.count
        var curr = String()
        for i in 0 ..< n {
            if Int(String(arr[i]))! > k{
                return -1
            }
            curr += String(arr[i])
            if Int(curr)! > k{
                cnt += 1
                curr = String(arr[i])
            }
        }
        return cnt
    }
}
