class Solution {
    func countPoints(_ points: [[Int]], _ queries: [[Int]]) -> [Int] {
        var result: [Int] = []
        
        // steps in circles
        for j in 0..<queries.count {
            result.append(0)
            let xj = Float(queries[j][0])
            let yj = Float(queries[j][1])
            let rj = Float(queries[j][2])

            // steps in points
            for point in points {
                let x = Float(point[0])
                let y = Float(point[1])
                
                if ((x - xj) * (x - xj) + (y - yj) * (y - yj)).squareRoot() <= rj {
                    result[j] += 1
                }
            }
        }
        
        return result
    }
}
