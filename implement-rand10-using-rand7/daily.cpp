class Solution {
public:
    
    int Waviness(int x){
        int count = 0;
        string s = to_string(x);
        int n = s.size();
        if(n<3) return 0;

        for(int i=1;i<n-1;i++){
            if((s[i]>s[i-1] && s[i]>s[i+1]) || ((s[i]<s[i-1]) && s[i]<s[i+1])) count++;
        }
        return count;
    }
    int totalWaviness(int num1, int num2) {
        int ans = 0;

        for(int x=num1;x<=num2;x++){
            ans += Waviness(x);
        }
        return ans;
    }
};
