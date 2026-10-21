class Solution {
public:
    int func(string a,string b)
    {
        int ans=INT_MAX;
        for (char ch='a';ch<'z';ch++)
        {
            int cnt=0;
            for (int i=0;i<a.size();i++)
            {
                if (a[i]>ch) cnt++;
            }
            for (int i=0;i<b.size();i++)
           {
            if (b[i]<=ch) cnt++;
           }
           ans=min(ans,cnt);
        }
        return ans;
        
    }
    int func2(string a,string b)
    {
        int ans=INT_MAX;
        for (char ch='a';ch<='z';ch++)
        {
            int cnt=0;
            for (int i=0;i<a.size();i++)
            {
                if (a[i]!=ch) cnt++;
            }
            for (int i=0;i<b.size();i++)
            {
                if (b[i]!=ch) cnt++;
            }
            ans=min(ans,cnt);
        }
        return ans;
    }
    int minCharacters(string a, string b) 
    {
         int ans1=func(a,b);
         int ans2=func(b,a);
         int ans3=func2(a,b);
         return min(ans1,min(ans2,ans3));

    }
};
