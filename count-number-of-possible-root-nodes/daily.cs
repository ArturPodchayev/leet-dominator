public class Solution {
    public string SmallestSubsequence(string s) {
        
        bool[] visited = new bool[26];
        int[] lastIndex = new int[26];
        Stack<char> st = new Stack<char>();

        for(int i=0;i<s.Length;i++)
        {
            lastIndex[s[i]-'a'] = i;
        }

        for(int i=0;i<s.Length;i++)
        {            
            if(!visited[s[i]-'a'])
            {
                while(st.Count > 0 && st.Peek() > s[i] && lastIndex[st.Peek()-'a'] > i)
                {
                    visited[st.Pop()-'a'] = false;
                }

                st.Push(s[i]);
                visited[s[i]-'a'] = true; 
            }
        }

        string res = String.Empty;
        while(st.Count > 0)
        {
            res = st.Pop() + res;
        }

        return res;
    }
}
