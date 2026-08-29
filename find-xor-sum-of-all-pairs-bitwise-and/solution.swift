class Solution {
    func getXORSum(_ arr1: [Int], _ arr2: [Int]) -> Int {
        arr1.reduce(0, ^) & arr2.reduce(0, ^)
    }
}
