class Solution {
public:
    int scoreOfParentheses(string s) {

        stack<char>st ;
        stack<int>s2 ;
        int n  = s.length() ;
        st.push('(');
       
        for(int i  =1 ; i < n ; i++ ){
            

           if(s[i] ==')'){
            int temp ;
            if(st.top() == '.') temp = 0;
            else temp = 1 ;

            while(st.top() != '('){
              if(st.top() != '*'){
                temp+=s2.top();
                s2.pop();
                st.pop();
              }else {
                temp*=2 ;
                st.pop();
              }
            }
            
             st.pop();
             st.push('.') ;
             s2.push(temp) ;
             
           }else if(s[i] =='(' && st.top() == '('){
             st.push('*');
             st.push('(');
           }else{
             st.push('(');
           }

        }
        int ans = 0 ;
        while(!s2.empty()){ans+=s2.top(); s2.pop();}
        return ans ;
        
    }
};
