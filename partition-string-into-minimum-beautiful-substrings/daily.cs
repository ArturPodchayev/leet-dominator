public class Solution {
    public IList<string> GenerateParenthesis(int n) {
            var res = new List<string>() { "()" };
            for (var i = 1; i < n; i++)
                res = res
                    .SelectMany(x =>
                    {
                        var res = new List<string>();
                        for (var i = 0; i < x.Length; i++)
                            res.Add(x.Insert(i, "()"));
                        return res;
                    })
                    .Distinct()
                    .ToList();

            return res;
    }
}
