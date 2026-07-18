class Solution {
public:
    int appendCharacters(string s, string t) {
int si=0;
int ti=0;
while(si<s.size() && ti<t.size())
{ if(s[si]==t[ti])
    { ti++;}
 si++;  
}
return t.size()-ti;
          }
};
