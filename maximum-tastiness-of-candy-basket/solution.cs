public class Solution {
    public int MaximumTastiness(int[] price, int k) {
        Array.Sort(price);
        int head = 0;
        int tail = 1000_000_000;
        while (head < tail) {
            int mid = head + (tail - head) / 2;
            if (check(mid, price, k)){
                head = mid + 1;
            }else{
                tail = mid;
            }
        }
        return head - 1;
    }

    private bool check(int mid, int[] price, int k) {
        int last = price[0];
        int count = 1;
        int i = 1;
        while (count < k && i < price.Length) {
            if (price[i] - last >= mid) {
                last = price[i]; 
                count++;
            }
            i++;
        }
        return count == k;
    }
}
