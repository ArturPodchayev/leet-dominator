class Solution {
    public int[] pathExistenceQueries(int n, int[] nums, int maxDiff, int[][] queries) {
        int[][] arr = new int[n][2];
        for (int i = 0; i < n; i++) {
            arr[i][0] = nums[i];
            arr[i][1] = i;
        }
        Arrays.sort(arr, (a, b) -> Integer.compare(a[0], b[0]));

        int[] pos = new int[n];
        for (int i = 0; i < n; i++) {
            pos[arr[i][1]] = i;
        }
        int[] gno = new int[n];
        int comp = 0;
        gno[0] = 0;
        for (int i = 1; i < n; i++) {
            if (arr[i][0] - arr[i - 1][0] > maxDiff)
                comp++;
            gno[i] = comp;
        }

        int[] next = new int[n];
        int j = 0;
        for (int i = 0; i < n; i++) {
            while (j + 1 < n && arr[j + 1][0] - arr[i][0] <= maxDiff)
                j++;
            next[i] = j;
        }
        int LOG = 20;
        int[][] up = new int[LOG][n];
        for (int i = 0; i < n; i++)
            up[0][i] = next[i];
        for (int k = 1; k < LOG; k++) {
            for (int i = 0; i < n; i++) {
                up[k][i] = up[k - 1][up[k - 1][i]];
            }
        }

        int[] ans = new int[queries.length];
        for (int i=0;i< queries.length;i++) {
            int a = pos[queries[i][0]];
            int b = pos[queries[i][1]];
            if (a > b) {
                int t = a;
                a = b;
                b = t;
            }
            if (gno[a] != gno[b]) {
                ans[i] = -1;
                continue;
            }
            if (a == b) {
                ans[i] = 0;
                continue;
            }
            int cur = a;
            int res = 0;
            for (int k = LOG - 1; k >= 0; k--) {
                if (up[k][cur] < b) {
                    cur = up[k][cur];
                    res += 1 << k;
                }
            }
            ans[i] = res + 1;
        }

        return ans;
    }
}
