public class Solution {
    public string Reformat(string s)
    {
        int len = s.Length / 2 + 1;
        char[] numbers = new char[len];
        char[] letters = new char[len];
        int numberIndex = 0, letterIndex = 0;

        foreach (char c in s)
        {
            if (c < 'A')
            {
                if (numberIndex == len)
                {
                    return "";
                }
                
                numbers[numberIndex++] = c;
            }
            else
            {
                if (letterIndex == len)
                {
                    return "";
                }
                
                letters[letterIndex++] = c;
            }
        }
        if (Math.Abs(numberIndex - letterIndex) > 1)
        {
            return "";
        }
        
        char[] result = new char[s.Length];
        int index = 0;
        if (numberIndex > letterIndex)
        {
            for (int i = 0; i < len; i++)
            {
                if (i < numberIndex)
                {
                    result[index++] = numbers[i];
                }

                if (i < letterIndex)
                {
                    result[index++] = letters[i];
                }
            }
        }
        else
        {
            for (int i = 0; i < len; i++)
            {
                if (i < letterIndex)
                {
                    result[index++] = letters[i];
                }
                
                if (i < numberIndex)
                {
                    result[index++] = numbers[i];
                }
            }
        }
        
        return new string(result);
    }
}
