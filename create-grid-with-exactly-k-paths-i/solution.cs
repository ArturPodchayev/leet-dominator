public class Solution {
    public string[] CreateGrid(int m, int n, int k) {
        if (k == 1)
        {
            return CreateGrid1(m, n);
        }
        if (k == 2)
        {
            if (m == 1 || n == 1) return new string[0];
            return CreateGrid2(m, n);
        }
        if (k == 3)
        {
            if (m == 1 || n == 1) return new string[0];
            if (m <= 2 && n <= 2) return new string[0];
            return CreateGrid3(m, n);
        }
        if (k == 4)
        {
            if (m == 1 || n == 1) return new string[0];
            if (m * n <= 6) return new string[0];
            if (m == 3 && n == 3) return CreateGrid33();
            return CreateGrid4(m, n);
        }
        return new string[0];
    }
    private string[] CreateGrid4(int m, int n)
    {
        if (m >= 4)
        {
            var str0 = new string('.', n);
            var str1 = new string('#', n - 2) + "..";
            var str2 = new string('#', n - 1) + ".";
            var rs = new string[m];
            rs[0] = str0;
            rs[1] = str1;
            rs[2] = str1;
            rs[3] = str1;
            for (int i = 4; i < m; i++)
            {
                rs[i] = str2;
            }
            return rs;
        }
        if (n >= 4)
        {
            var str0 = new string('.', n);
            var str1 = new string('#', n - 4) + "....";
            var str2 = new string('#', n - 1) + ".";
            var rs = new string[m];
            rs[0] = str0;
            rs[1] = str1;
            for (int i = 2; i < m; i++)
            {
                rs[i] = str2;
            }
            return rs;
        }
        return new string[0];
    }
    private string[] CreateGrid33()
    {
        return new string[] {"..#", "...", "#.."};
    }
    private string[] CreateGrid3(int m, int n)
    {
        if (m >= 3)
        {
            var str0 = new string('.', n);
            var str1 = new string('#', n - 2) + "..";
            var str2 = new string('#', n - 1) + ".";
            var rs = new string[m];
            rs[0] = str0;
            rs[1] = str1;
            rs[2] = str1;
            for (int i = 3; i < m; i++)
            {
                rs[i] = str2;
            }
            return rs;
        }
        if (n >= 3)
        {
            var str0 = new string('.', n);
            var str1 = new string('#', n - 3) + "...";
            var str2 = new string('#', n - 1) + ".";
            var rs = new string[m];
            rs[0] = str0;
            rs[1] = str1;
            for (int i = 2; i < m; i++)
            {
                rs[i] = str2;
            }
            return rs;
        }
        return new string[0];
    }
    private string[] CreateGrid2(int m, int n)
    {
        var str0 = new string('.', n);
        var str1 = new string('#', n - 2) + "..";
        var str2 = new string('#', n - 1) + ".";
        var rs = new string[m];
        rs[0] = str0;
        rs[1] = str1;
        for (int i = 2; i < m; i++)
        {
            rs[i] = str2;
        }
        return rs;
    }
    private string[] CreateGrid1(int m, int n)
    {
        var str0 = new string('.', n);
        var str1 = new string('#', n - 1) + ".";
        var rs = new string[m];
        rs[0] = str0;
        for (int i = 1; i < m; i++)
        {
            rs[i] = str1;
        }
        return rs;
    }
}
