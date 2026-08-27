class Solution {
	func diagonalSort(_ mat: [[Int]]) -> [[Int]] {
		let rowCount = mat.count
		let colCount = mat[0].count
		var slices = [[Int]]()
		var y0 = rowCount - 1
		var x0 = 0
		while true {
			var slice = [Int]()
			var y1 = y0
			var x1 = x0
			while true {
				slice.append(mat[y1][x1])
				y1 += 1
				x1 += 1
				if y1 == rowCount || x1 == colCount {
					break
				}
			}
			slices.append(slice.sorted())
			if y0 > 0 {
				y0 -= 1
			} else if x0 < (colCount - 1) {
				x0 += 1
			} else {
				break
			}
		}

		var resultMat = mat
		y0 = rowCount - 1
		x0 = 0
		for slice in slices {
			var y1 = y0
			var x1 = x0
			for num in slice {
				resultMat[y1][x1] = num
				y1 += 1
				x1 += 1
			}
			if y0 > 0 {
				y0 -= 1
			} else if x0 < (colCount - 1) {
				x0 += 1
			}
		}
		return resultMat
	}
}
