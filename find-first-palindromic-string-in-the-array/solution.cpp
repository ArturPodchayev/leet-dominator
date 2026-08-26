class Solution {
public:
    string firstPalindrome(vector<string>& words) {
        
        for(int i=0; i< words.size(); i++)
        {
            bool isPali= true;
            for(int j=0,k= words[i].size()-1; j<=k ; j++,k--)
            {
                 if(words[i][j] != words[i][k])
                {
                    isPali = false;
                    break;
                }
            }
            if(isPali == true) return words[i];
    }
    return "";
    }
};
