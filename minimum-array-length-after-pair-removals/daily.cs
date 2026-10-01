public class Solution {
    public bool IsValid(string s) {
        // create a stack
        // if char c in s is an opening bracket then push it in the stack and move forward
        // the next char c should be the closing bracket of sme bracket, if not retun false


        Stack<char> stack = new Stack<char>();

        for(int i = 0; i < s.Length ; i ++)
        {
            if(s[i] == '(' || s[i] == '{' || s[i] == '[')
            {
                stack.Push(s[i]);
            }

           if(s[i] == ')')
           {
            if(stack.Count == 0 )
            return false;

                if( stack.Peek() == '(')
                {
                    stack.Pop();
                }
                else{
                    return false;
                }
           }

           if( s[i] == '}')
           {
            if(stack.Count == 0 )
            return false;

            
            if(stack.Peek() == '{')
            {
                stack.Pop();
            }
            else
            {
                return false;
            }
           }

           if(  s[i] == ']')
           {
            if(stack.Count == 0 )
            return false;

            if(stack.Peek() == '[')
            {
                stack.Pop();
            }
            else
            {
                return false;
            }
           }

        }
return stack.Count == 0;
    }
}
