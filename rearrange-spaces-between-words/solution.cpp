class Solution {
public:
    string reorderSpaces(string text) {
        int count = 0, n = text.size();
        vector<string> s;
        for(int i=0; i<n; i++){
            if(text[i] == ' ') count++;
            else{
                string temp = "";
                while(i<n && text[i] != ' '){
                    temp += text[i++];
                }
                if(i<n) count++;
                s.push_back(temp);
            }
        }
        if(count == 0) return text;
        int num = s.size();
        if(num == 1) return s[0]+string(count, ' ');
        
        int space = count/(num-1);
        int rem = count%(num-1);

        string ans = "";
        for(int i=0; i<num-1; i++){
            ans+=s[i];
            ans+= string(space, ' ');
        }
        ans+=s[num-1];
        ans+=string(rem, ' ');
        return ans;
    }
};
