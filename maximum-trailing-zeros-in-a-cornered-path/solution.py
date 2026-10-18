import numpy as np

# directions
U = 0 # Up
D = 1 # Down
L = 2 # Left
R = 3 # Right
N_dir = 4

# factors
T = 0 # Two
F = 1 # Five
N_fac = 2

def f(x, p):
    '''returns the highest power of `p` that divides `x`'''
    c = 0
    while x % p == 0:
        c += 1
        x //= p
    return c

class Solution:
    def maxTrailingZeros(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        grid = np.array(grid)

        # y[i, j, p] = 
        #   highest power of `p` that divides `grid[i, j]`
        y = np.zeros((m, n, N_fac), dtype=int)
        for i in range(m):
            for j in range(n):
                y[i, j, T] = f(grid[i, j], 2)
                y[i, j, F] = f(grid[i, j], 5)

        # x[i, j, d, p] = 
        #   count of times that `p` appears in leg `(i,j,d)`
        x = np.zeros((m, n, N_dir, N_fac), dtype=int)
        for i in range(m):
            for j in range(n):
                if i > 0:
                    x[i, j, U] = y[i-1, j] + x[i-1, j, U]
                    x[m-1-i, j, D] = y[m-i, j] + x[m-i, j, D]
                if j > 0:
                    x[i, j, L] = y[i, j-1] + x[i, j-1, L]
                    x[i, n-1-j, R] = y[i, n-j] + x[i, n-j, R]

        # the cornered path's legs can be oriented in one of four ways
        path_orientations = [(U,R), (U,L), (D,R), (D,L)]

        # for each orientation `(d1, d2)`, 
        #   for each corner `(i, j)` (vectorized):
        #       find the the number of trailing zeros in the product
        #       of the path `(i, j, d1, d2)`.
        #   max-reduce over corners (vectorized)
        # max-reduce over orientations.
        return max(
            (y + x[:, :, d1] + x[:, :, d2]).min(-1).max()
            for d1, d2 in path_orientations
        )
