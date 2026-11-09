class Solution {
public:
    bool reportSpam(vector<string>& message, vector<string>& bannedWords) {
        int n=message.size();
        int m=bannedWords.size();
        int cnt=0;

        unordered_set<string> st(bannedWords.begin(),bannedWords.end());

        for(auto &word:message){
            if(st.find(word)!=st.end()){
                cnt++;
                if(cnt>=2){
                return true;
            }

            }
            
        }

        return false;
        
    }
};
