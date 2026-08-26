class Solution {
public:
    string shortestBeautifulSubstring(string s, int k) {
        int n = s.size();
        string ans = "";
        int left = 0;
        int right = 0;
        vector<int>freq(2,0);

        while(right<n)
        {
            freq[s[right] - '0']++;

            while(freq[1]>=k)
            {
                if(freq[1]==k)
                {
                    string temp = s.substr(left,right-left+1);

                    if(ans == "" || temp.length() < ans.length() || (temp.length() == ans.length() && temp < ans)) 
                    {
                            ans = temp;
                    }
                }
                freq[s[left] - '0']--;
                left++;
            }

            right++;
        }

        return ans;
    }
};
