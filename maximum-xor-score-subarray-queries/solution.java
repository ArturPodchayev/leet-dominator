class Solution {
    public int[] maximumSubarrayXor(int[] nums, int[][] queries) {
        int n=nums.length;
        int[][] xorScore=new int[n][n];
        for(int i=0;i<n;i++) {
            xorScore[i][i]=nums[i];
        }
        for(int i=2;i<=n;i++) {
            for(int row=0;row<n-i+1;row++) {
                int col=i+row-1;
                xorScore[row][col]=xorScore[row][col-1]^xorScore[row+1][col];
            }
        }
        for(int i=2;i<=n;i++) {
            for(int row=0;row<n-i+1;row++) {
                int col=i+row-1;
                xorScore[row][col]=Math.max(xorScore[row][col],Math.max(xorScore[row][col-1],xorScore[row+1][col]));
            }
        }
        int[] arr=new int[queries.length];
        for(int i=0;i<queries.length;i++) {
            int l=queries[i][0];
            int r=queries[i][1];
            int val=xorScore[l][r];
            arr[i]=val;
        }
        return arr;
    }
}
