public class Solution
{
    public IList<int> SequentialDigits(int low, int high)
    {
        const string digits = "123456789";
        List<int> result = [];
        var lowLength = low.ToString().Length;
        var highLength = high.ToString().Length;

        for (var currentLength = lowLength; currentLength <= highLength; currentLength++)
        {
            for (var startIndex = 0; startIndex < 10 - currentLength; startIndex++)
            {
                var num = int.Parse(digits.Substring(startIndex, currentLength));
                if (low <= num && num <= high)
                {
                    result.Add(num);
                }
            }
        }

        return result;
    }
}
