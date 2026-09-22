class Solution {
public:
    string mergeCharacters(string s, int k) {
        vector<int>v(s.size(),1);


        stack<char>st;

        unordered_map<char,int>mp;

        int i=0;
        int c=0;
        while(i<s.size()){

            if(st.size()==0){
                st.push(s[i]);
                
                mp[s[i]]=c;
                c++;
                i++;
            }
            else{

                char x=s[i];
                if(mp.find(x)!=mp.end()){
                    if(c-mp[x]<=k){
                        i++;
                    }
                    else{
                        mp[x]=c;
                        st.push(x);
                        c++;
                        i++;
                    }
                }
                else{
                    mp[x]=c;
                    c++;
                    i++;
                    st.push(x);
                }
            }
        }
         string ans="";

        while(st.size()){
            ans.push_back(st.top());
            st.pop();
        }

        reverse(ans.begin(),ans.end());

        return ans;
    }
};
