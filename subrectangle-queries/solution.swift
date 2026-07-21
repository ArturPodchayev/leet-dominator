class SubrectangleQueries {
    
    var m: [[Int]]

    init(_ rectangle: [[Int]]) {
        m = rectangle
    }
    
    func updateSubrectangle(_ row1: Int, _ col1: Int, _ row2: Int, _ col2: Int, _ newValue: Int) {
        for x in row1...row2 {
            for y in col1...col2 {
                m[x][y] = newValue
            }
        }
    }
    
    func getValue(_ row: Int, _ col: Int) -> Int {
        m[row][col]
    }
}
