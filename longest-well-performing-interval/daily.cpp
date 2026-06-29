class Solution {
public:
    int numOfStrings(vector<string>& patterns, string word) 
    {
        int ans = 0;
        for(string a:patterns)
        {
            for(int i=0;i<word.size();i++)
            {
               if(word.substr(i,a.size())==a)
               {
                    ans++;
                    break;
               } 
            } 
        }
        return ans;
    }
//please upvote...
};
