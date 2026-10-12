public class Solution {
    public int CountOfSubstrings(string word, int k) {
        var dic = new Dictionary<int, List<int>>();
        var consCount = 0;
        dic.Add(consCount, new List<int> { -1 });
        var aux = new int[word.Length][];
        var count = new int[5];
        var rs = 0;
        for (int i = 0; i < word.Length; i++)
        {
            if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u')
            {
                ChangeVowelsArray(word[i], count);
            }
            else
            {
                consCount++;
            }
            aux[i] = new int[5] { count[0], count[1], count[2], count[3], count[4] };
            if (!dic.ContainsKey(consCount)) dic.Add(consCount, new List<int>());
            dic[consCount].Add(i);
            rs += CountOfSubstrings(consCount, k, dic, i, aux);
        }
        return rs;
    }
    private int CountOfSubstrings(int consCount, int k, Dictionary<int, List<int>> dic, int index, int[][] aux)
    {
        var rs = 0;
        if (!dic.ContainsKey(consCount - k)) return rs;
        foreach (var item in dic[consCount - k])
        {
            if (item != -1)
            {
                if (ContsinsAllVowels(aux[index], aux[item])) rs++;
            }
            else
            {
                if (ContsinsAllVowels(aux[index], new[] { 0, 0, 0, 0, 0} )) rs++;
            }
        }
        return rs;
    }
    private bool ContsinsAllVowels(int[] vowels1, int[] vowels0)
    {
        for (int i = 0; i < vowels0.Length; i++)
        {
            if (vowels1[i] <= vowels0[i]) return false;
        }
        return true;
    }
    private void ChangeVowelsArray(char ch, int[] count)
    {
        switch (ch)
        {
            case 'a':
                count[0]++;
                break;
            case 'e':
                count[1]++;
                break;
            case 'i':
                count[2]++;
                break;
            case 'o':
                count[3]++;
                break;
            case 'u':
                count[4]++;
                break;
        }
    }
}
