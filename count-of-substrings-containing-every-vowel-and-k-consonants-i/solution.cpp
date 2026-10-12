class Solution {
public:
    int countOfSubstrings(string word, int k) {
        int l=0,cnt=0;
        while(l<word.size()){
            unordered_set<char> st1;
            vector<char> st2;
            int ll = l;
            while(ll<word.size()){
                if(word[ll]=='a' || word[ll]=='e' || word[ll]=='i' || word[ll]=='o' || word[ll]=='u'){
                    st1.insert(word[ll]);
                }
                else{
                    st2.push_back(word[ll]);
                }
                ll++;
                if(st1.size()==5 && st2.size()==k){
                    cnt+=1;
                }
                else if(st2.size()>k){
                    break;
                }
            }
            l++;
        }
        return cnt;
    }
};
