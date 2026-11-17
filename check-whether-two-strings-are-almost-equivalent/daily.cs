public class Solution {
    public int MinimumChanges(string s, int k) {
        int n = s.Length;
        int[,] f = new int[n, k + 1];
        for(int i = 0; i < n; i++){
            for(int j = 0; j <= k; j++){
                f[i, j] = (int)1e9;
            }
        }
        
        for(int i = 0; i < n; i++){
            for(int j = 0; j < i; j++){
                int owo = YSY(j, i);
                for(int p = 1; p <= k; p++){
                    if(p == 1 && j == 0){
                        f[i, p] = Math.Min(f[i, p], owo);
                    }
                    else if(p > 0 && j > 0){
                        f[i, p] = Math.Min(f[i, p], f[j - 1, p - 1] + owo);
                    }
                }
            }
        }
        return f[n - 1, k];
        
        int YSY(int l, int r){
            if(r - l == 1){
                return s[l] == s[r] ? 0 : 1;
            } 
            
            int ysy = (int)1e9;
            for(int t = 1; t <= r - l; t++){
                if((r - l + 1) % t != 0) continue;
                string[] str = new string[101];
                Array.Fill(str, "");
                for(int i = l; i <= r; i++){
                    str[(i - l + 1) % t] += s[i];
                }
                
                int uwu = 0;
                for(int d = 0; d < 101; d++){
                    if(str[d].Length > 0){
                        for(int i = 0, j = str[d].Length - 1; i <= j; i++, j--){
                            if(str[d][i] != str[d][j]){
                                uwu++;
                            }
                        }
                    }
                }
                ysy = Math.Min(ysy, uwu);
            }
            return ysy;
        }
    }
}
