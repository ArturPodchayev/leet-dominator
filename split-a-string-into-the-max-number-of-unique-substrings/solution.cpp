class Solution {
public:
int ans=0;
void split(string &s,set<string>&st,int n,int i){
    if(i==n){
        ans=max(ans,(int)st.size());
        return;
    }
    for(int j=i;j<n;j++){
        string part=s.substr(i,j-i+1);
        if(!st.count(part)){
            st.insert(part);
            split(s,st,n,j+1);
            st.erase(part);
        }
    }
}
    int maxUniqueSplit(string s) {
      set<string>st;
      int n=s.size(),i=0;
      split(s,st,n,i);
      return ans;
    }
};
