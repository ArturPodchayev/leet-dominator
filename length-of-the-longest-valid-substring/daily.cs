public class Solution {
    public int ReverseDegree(string s) {
        int negativeSum = 0;
        int n = s.Length;
        for(int i = 0; i < n; i++){
            negativeSum += (s[i] - 'a')*(i+1);
        }        
        return (13*(n+1)*n)-negativeSum;
    }
}
