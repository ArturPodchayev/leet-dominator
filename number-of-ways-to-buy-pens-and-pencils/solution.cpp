class Solution {
public:
    long long waysToBuyPensPencils(int total, int cost1, int cost2) {
        long long ans=0;
        for(int i=0;i<=total;i+=cost1)
        {
            ans+=1+(total-i)/cost2;
        }
     return ans;   
    }
};
