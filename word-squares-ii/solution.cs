public class Solution
{

    private bool IsValid(string top, string left, string right, string bottom)
    {
        return top[0] == left[0] &&
               top[3] == right[0] &&
               bottom[0] == left[3] &&
               bottom[3] == right[3];
    }

    public IList<IList<string>> WordSquares(string[] words)
    {
        var result = new List<IList<string>>();
        int n = words.Length;

        for (int top = 0; top < n; top++)         
        {
            for (int left = 0; left < n; left++)       
            {
                if (top == left){
                    continue;
                } 

                for (int right = 0; right < n; right++)   
                {
                    if (right == top || right == left)
                   {
                        continue;
                 }


                    for (int bottom = 0; bottom < n; bottom++) 
                    {
                        if (bottom == top || bottom == left || bottom == right){
                            continue;
                        } 

                        string topStr = words[top];
                        string leftStr = words[left];
                        string rightStr = words[right];
                        string bottomStr = words[bottom];

                        if (IsValid(topStr, leftStr, rightStr, bottomStr))
                        {
                            result.Add(new List<string>
                            {
                                topStr, leftStr, rightStr, bottomStr
                            });
                        }
                    }
                }
            }
        }

        result.Sort((a, b) =>
        {
            for (int i = 0; i < 4; i++)
            {
                int cmp = string.Compare(a[i], b[i], StringComparison.Ordinal);
                if (cmp != 0) return cmp;
            }
            return 0;
        });

        return result;
    }


}
