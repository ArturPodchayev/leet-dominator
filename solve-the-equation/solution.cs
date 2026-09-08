public class Solution
{
    public string SolveEquation(string equation)
    {
        var (d, x, sign) = (0, 0, 1);

        var number = 0;

        var prev = '*';

        foreach (var c in equation)
        {
            if (char.IsDigit(c))
            {
                number = number * 10 + (c - '0');
            }
            else
            {
                if (c == 'x')
                {
                    x += sign * (char.IsDigit(prev) ? number : 1);
                }
                else
                {
                    d += sign * number;

                    if (c == '=')
                    {
                        d *= -1;
                        x *= -1;
                    }

                    sign = (c == '-') ? -1 : 1;
                }

                number = 0;
            }

            prev = c;
        }

        d += sign * number;

        if (x == 0)
            return d == 0 ? "Infinite solutions" : "No solution";

        return "x=" + (-d/x);
    }
}
