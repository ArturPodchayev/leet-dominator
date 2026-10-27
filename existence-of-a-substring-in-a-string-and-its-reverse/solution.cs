public class Solution {
    public bool IsSubstringPresent(string s) {
        Dictionary<string, int> dic= new Dictionary<string, int>();
        for(int i=0; i < s.Length-1; i++){
            string sub = s.Substring(i, 2);
           if(dic.ContainsKey(sub)) dic[sub]++;
           else dic.Add(sub,0);
        }
        for(int i = s.Length-1 ; i >0; i-- ){
         string sub= new string(new []{s[i],s[i-1]});
          if(dic.ContainsKey(sub)) return true;
        }
        return false;
    }
}
