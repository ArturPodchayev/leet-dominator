class Solution {
    func canAliceWin(_ n: Int) -> Bool {
        var turn = 10, alice = true, n = n
        while n >= 0 {
            n -= turn
            turn -= 1
            alice = !alice
        }
        return alice
    }
}
