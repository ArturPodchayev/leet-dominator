class Solution {
public:
    int longestValidSubstring(string word, vector<string>& forbidden) {
        int n = word.size();
        set<string> st(begin(forbidden),end(forbidden));
        
        int maxi = 0;
        int i = 0;
        string curr;
        while(i < n) {
            curr += word[i];
            
            // check if this is valid or not
            for(int j=1 ; j<=10 ; j++) {
                if(j > curr.size()) break;
                
                string sub = curr.substr(curr.size()-j,j);
                if(st.count(sub)) {
                    curr = curr.substr(curr.size()-j+1);
                    break;
                }
            }
            
            if(curr.size() > maxi) maxi = curr.size();
            i++;
        }
        return maxi;
    }
};
