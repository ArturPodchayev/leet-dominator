public class Solution {
    public bool CanAliceWin(int n) {
        var step = 10;
        while (n >= step) {
            n-=step;
            step--;
        }
        return step % 2 == 1;
    }
}
