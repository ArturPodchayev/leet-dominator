public class Solution {
    public string ReorderSpaces(string text) 
    {
        var spacesCount = text.Count(x => x == ' ');
        var words = text.Split(" ").Where(x => !string.IsNullOrWhiteSpace(x)).ToArray();
        var wordsLength = words.Length - 1;
        var spacesBetweenWords = wordsLength == 0 ? 0 : spacesCount / wordsLength;
        var extraSpaces = spacesCount - spacesBetweenWords * wordsLength;

        return new StringBuilder(text.Length)
            .AppendJoin(new string(' ', spacesBetweenWords), words)
            .Append(new string(' ', extraSpaces))
            .ToString();
    }
}
