class Solution {
func smallestNumber(_ n: Int, _ t: Int) -> Int {
     var num = n

    while currentValue(n: num) % t != 0 {
        num += 1
        _ = currentValue(n: num)
    }

    return num
}

func currentValue(n: Int) -> Int {
    var char: [Character] = String(n).map { Character(extendedGraphemeClusterLiteral: $0) }
    var p1 = 0
    var resultValue = 0
    while p1 <= char.count - 1 {
        if p1 == 0 {
            resultValue = Int(String(resultValue))! + Int(String(char[p1]))!
        } else {
            resultValue = Int(String(char[p1]))! * resultValue
        }
        p1 += 1
    }
    return resultValue
}
}
