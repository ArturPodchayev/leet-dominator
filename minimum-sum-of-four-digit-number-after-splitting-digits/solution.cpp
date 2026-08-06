class Solution {
public:
    int minimumSum(int num) {
        vector<int> ans(4);
        for(int i=3;i>=0;i--)
        {
            ans[i]=num%10;
            num/=10;
        }

        sort(ans.begin(),ans.end());

        int sum1=(ans[0]*10 + ans[2]);
        int sum2=(ans[1]*10 + ans[3]);

        return sum1+sum2;
    }
};
