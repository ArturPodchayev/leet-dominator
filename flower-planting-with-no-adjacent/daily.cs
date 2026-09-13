
public class Solution {
    public int LargestOverlap(int[][] img1, int[][] img2) {
        int n = img1.Length;
        int[] bits1 = new int[n];
        int[] bits2 = new int[n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                bits1[i] = (bits1[i] << 1) | img1[i][j];
                bits2[i] = (bits2[i] << 1) | img2[i][j];
            }
        }

        int maxOverlap = 0;

        for (int dy = 0; dy < n; dy++) {
            for (int dx = 0; dx < n; dx++) {
                if ((n - dy) * (n - dx) <= maxOverlap) break;
                maxOverlap = Math.Max(maxOverlap, CountForShift(bits1, bits2, dy, dx, n));
                maxOverlap = Math.Max(maxOverlap, CountForShift(bits1, bits2, dy, -dx, n));
                maxOverlap = Math.Max(maxOverlap, CountForShift(bits1, bits2, -dy, dx, n));
                maxOverlap = Math.Max(maxOverlap, CountForShift(bits1, bits2, -dy, -dx, n));
            }
        }

        return maxOverlap;
    }

    private int CountForShift(int[] b1, int[] b2, int dy, int dx, int n) {
        int overlap = 0;
        int startY = Math.Max(0, dy);
        int endY = Math.Min(n, n + dy);

        for (int y = startY; y < endY; y++) {
            int row1 = b1[y];
            int row2 = b2[y - dy];
            int shiftedRow2 = (dx >= 0) ? (int)((uint)row2 >> dx) : (row2 << -dx);
            overlap += BitOperations.PopCount((uint)(row1 & shiftedRow2));
        }

        return overlap;
    }
}
