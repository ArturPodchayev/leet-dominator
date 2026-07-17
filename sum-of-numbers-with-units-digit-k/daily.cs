public class Solution {
    public int MinimumNumbers(int num, int k) {
    if (num == 0)
        return 0;

    for (int count = 1; count <= 10; count++)
    {
        if (num >= count * k && (num - count * k) % 10 == 0)
            return count;
    }

    return -1;
    }
}
