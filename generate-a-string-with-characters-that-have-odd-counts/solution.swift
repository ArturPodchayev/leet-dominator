class Solution {
    func generateTheString(_ n: Int) -> String {
        return n == 0 ? "" : (n % 2 == 1 ? String(Array(repeating: "a", count: n)) : String(Array(repeating: "a", count: n - 1)) + "b")
    }
}
