public class Solution {
    public int MaxActiveSectionsAfterTrade(string s) {
        int k=1;
          int ans1=0;
        List<int> l= new List<int>();
        for (int i= 0; i<s.Length; i+=k){
            k=1;
            if(s[i]=='0'){
                while(i+k<s.Length&&s[i+k]=='0'){
                    k++;
                }
                l.Add(k);
            }
            else{
                while(i+k<s.Length&&s[i+k]=='1'){
                    k++;
                }
                ans1+=k;
                l.Add(-k);
            }
        }
      int ans=ans1;
        for (int i=1; i< l.Count-1; i++){
            if(l[i]<0){
                int x=l[i-1]+l[i+1];
                
                  ans=Math.Max(ans,ans1+x);
            }
        }
        return ans;
    }
}
