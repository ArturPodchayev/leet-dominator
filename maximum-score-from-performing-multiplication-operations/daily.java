class Solution {
    public int zigZagArrays(int n, int l, int r) {
      int MOD = 1_000_000_007;
        int m = r-l+1;
        if(n==1)
        return m;
        long []up = new long[m+1];
        long[]down = new long[m+1];
        for(int y=1; y <= m ; y++){
            up[y] = y-1;
            down[y] = m-y;
        }
        for(int i= 3; i<=n; i++){
            long nUp[] = new long [m+1];
            long nDown[] = new long[m+1];

            long pUp[] = new long[m+1];
            long pDown[] = new long[m+1];
        
        for(int x= 1; x<=m; x++){
           pUp[x] = (pUp[x-1]+up[x])%MOD;
           pDown[x] = (pDown[x-1]+down[x])%MOD;
        }
        for(int y= 1; y<=m; y++){
            nUp[y] = pDown[y-1];
            long currsum = (pUp[m]-pUp[y]+MOD)%MOD;
            nDown[y] = currsum;
        }
        up = nUp;
        down = nDown;

        }
        long totalcount = 0;
        for(int x=1; x<=m; x++){
            totalcount = (totalcount +up[x] + down[x])%MOD;
        }
        return (int) totalcount;
    }
}
