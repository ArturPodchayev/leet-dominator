class Solution {
public:
    int minimumPartition(string s, int k) {
        long long curnum=0, cnt=1;
        for(int i=0;i<s.size();i++){
            curnum= curnum*10 + (s[i]-'0');
            if(curnum>k){
                cnt++;
                curnum= s[i]-'0';
            }
            if(curnum>k)return -1;
        }
        return cnt;
    }
};
