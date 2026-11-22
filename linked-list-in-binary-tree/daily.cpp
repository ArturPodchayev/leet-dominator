class Solution {
public:
    bool checkString(string s) {
        bool flag = false;
        for (char c:s){
            if(c=='b'){
                flag = true;
            }
            if(c=='a' && flag == true) return false;
        }
        return true;
    }
};
