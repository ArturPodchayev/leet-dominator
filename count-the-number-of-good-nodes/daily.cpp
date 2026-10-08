class Solution {
public:
    string removeOuterParentheses(string s) {
        string result;
        int Count=0;
        int i=0;
        int n=s.size();

        while(i!=n)
        {
            if(s[i]=='(' && Count==0)
            {
                Count++;
            }
            else if(s[i]=='(' && Count!=0)
            {
                result.push_back('(');
                Count++;
            }
            else if(s[i]==')')
            {
                Count--;
                if(Count!=0)
                {
                    result.push_back(')');
                }
            }
            i++;
        }
        return result;
    }
};
