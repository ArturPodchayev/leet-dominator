func diagonalSort(mat [][]int) [][]int {
    for i := 0; i < len(mat)-1; i++ {
        for range min(len(mat)-i, len(mat[0])) {
            for i2, j := i+1, 1; i2 < len(mat) && j < len(mat[i]); i2, j = i2+1, j+1 {
                if mat[i2][j] < mat[i2-1][j-1] {
                    mat[i2][j], mat[i2-1][j-1] = mat[i2-1][j-1], mat[i2][j]
                }
            }
        }
    }
    for j := 1; j < len(mat[0])-1; j++ {
        for range min(len(mat), len(mat[0])-j) {
            for i, j2 := 1, j+1; i < len(mat) && j2 < len(mat[i]); i, j2 = i+1, j2+1 {
                if mat[i][j2] < mat[i-1][j2-1] {
                    mat[i][j2], mat[i-1][j2-1] = mat[i-1][j2-1], mat[i][j2]
                }
            }
        }
    }
    return mat
}
