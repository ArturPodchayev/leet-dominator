class Solution {
public:
    int maxDepth(string s) {
        int n=s.size();
        int count=0;
        int cnt=0;
        for(int i=0;i<n;i++){
            if(s[i]=='('){
                cnt++;
            }
            if(s[i]==')'){
                cnt--;
            }
            count=max(cnt,count);
        }
        return count;
    }
};
