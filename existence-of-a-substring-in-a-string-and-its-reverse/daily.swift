class Solution {
    func createGrid(_ m: Int, _ n: Int) -> [String] {
        Array(
            repeating: "." + String(repeating: "#", count: n - 1),
            count: m - 1
        ) + [String(repeating: ".", count: n)]
    }
}
