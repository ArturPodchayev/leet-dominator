public class Solution
{
    public IList<string> StringMatching(string[] words)
    {
        return words.Where(w => words.Any(a => a.Contains(w) && a.Length > w.Length)).ToList();
    }
}
