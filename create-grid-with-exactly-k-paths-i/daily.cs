public class Solution {
    public string ReverseParentheses(string s)
    {
        Stack<int> bracketsStack = new();
        char[] result = s.ToCharArray();
        
        for (int i = 0; i < s.Length; i++){
            var c = s[i];
            if (c == '(') bracketsStack.Push(i);
            else if (c == ')'){
                // Reverse
                for(int l= bracketsStack.Pop()+1,r=i-1; l<r;l++,r--){
                    var tmp = result[l];
                    result[l] = result[r];
                    result[r] = tmp;
                }
            }
        }

        return new string(result.Where(c=>c!=')' && c!='(').ToArray());
    }
}
