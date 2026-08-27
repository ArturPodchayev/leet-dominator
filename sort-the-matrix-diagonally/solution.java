class Solution {
    public int[][] diagonalSort(int[][] mat) 
    {
        int m=mat.length;
        int n=mat[0].length;
        HashMap<Integer,PriorityQueue<Integer>> dg=new HashMap<>();
        for(int row=0;row<m;row++)
        {
            for(int col=0;col<n;col++)
            {
                int key=row-col;
                dg.putIfAbsent(key,new PriorityQueue<>());
                dg.get(key).add(mat[row][col]);
            }
        }

        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                mat[i][j]=dg.get(i-j).poll();
            }
        }
        return mat;
    }
}
