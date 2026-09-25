class Solution {
public:
    bool check(vector<int> v, int m, int k)
    {
        int c=1;
        int p=v[0];
        for(int i=1;i<v.size();i++)
        {
            if(v[i]-p >=m)
            {
                c++;
                p=v[i];
            }
            if(c==k)
                return true;
        }
        return false;
    }
    int maximumTastiness(vector<int>& stalls, int k) {
        int n=stalls.size();
        sort(stalls.begin(), stalls.end());
        int l=0;
        int h=stalls[n-1]-stalls[0];
        while(l<=h)
        {
            int m=(l+h)/2;
            if(check(stalls, m, k))
                l=m+1;
            else
                h=m-1;
        }
        return h;
    }
};
