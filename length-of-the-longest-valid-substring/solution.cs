public class Solution {
    public int LongestValidSubstring(string word, IList<string> forbidden) {
        HashSet<string> forbiddenSet = new HashSet<string>();

        int longestForbiddenStringLength = 0;

        foreach(string s in forbidden)
        {
            //Our problem set implies no repeated strings in forbidden.
            //Here is where we would first check if(!forbiddenSet.Contains(s))
            forbiddenSet.Add(s);
            if(s.Length>longestForbiddenStringLength)
            {
                longestForbiddenStringLength = s.Length;
            }
        }

        int startIndex = 0;
        int endIndex = 0;
        int record = 0;
        int count;

        string substring;
        bool shrank;
        while(endIndex < word.Length)
        {
            shrank = false;

            for(count = 0; count<=endIndex - startIndex && count<longestForbiddenStringLength; count++)
            {
                substring = word.Substring(endIndex - count, count+1);
  
                if(forbiddenSet.Contains(substring)){
                    if(endIndex - startIndex <= substring.Length)
                        startIndex++;
                    else
                        startIndex = Math.Min(endIndex - substring.Length + 2, endIndex);
                    shrank = true;
                    break;
                }
            }

            if(shrank)
            {
               continue;
            }
           
            endIndex++;
            
            if(endIndex - startIndex > record)
            {
                record = endIndex - startIndex;
            } 
        }

        return record;
    }
}
