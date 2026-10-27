public class Solution {
    public string[] CreateGrid(int m, int n) {
        char[][] tempRes = new char[m][];

        for(int i=0; i<m; i++){
            tempRes[i] = new char[n];
            Array.Fill(tempRes[i], '#');
            tempRes[i][0] = '.';
        }
        
        Array.Fill(tempRes[m-1], '.');
        string[] res = new string[m];

        for(int i=0; i<m; i++){
            res[i] = new string(tempRes[i]);
        }

        return res;
    }
}
