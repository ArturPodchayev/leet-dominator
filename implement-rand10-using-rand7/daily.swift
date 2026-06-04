class Solution : SolBase {
    func rand10() -> Int {
        var counter = 1
        var arr: [[Int]] = Array<[Int]>(repeating: Array<Int>(repeating: -1, count: 7), count: 7)
        for i in 0..<7 {
            for j in 0..<7 {
                if i*7 + j >= 40 {
                    break
                }
                arr[i][j] = counter
                counter = counter % 10 + 1
            }
        }
        var result = -1
        while result < 0 {
            let i = rand7() - 1
            let j = rand7() - 1
            result = arr[i][j]
        }
        return result
    }
}
