class Solution {
    func lexPalindromicPermutation(_ s: String, _ target: String) -> String {
        let chars = Array(s)
        let n = chars.count

        // Count characters
        var count = Array(repeating: 0, count: 26)

        for ch in chars {
            let index = Int(ch.asciiValue! - 97)
            count[index] += 1
        }

        // Find middle character
        var middle: Character = "\0"
        var oddCount = 0

        for i in 0..<26 {
            if count[i] % 2 == 1 {
                oddCount += 1
                middle = Character(UnicodeScalar(97 + i)!)
            }
        }

        // More than one odd frequency means
        // no palindromic permutation exists.
        if oddCount > 1 {
            return ""
        }

        // Characters available for the left half
        var halfCount = Array(repeating: 0, count: 26)

        for i in 0..<26 {
            halfCount[i] = count[i] / 2
        }

        let halfLength = n / 2

        var prefix: [Character] = []

        func char(_ index: Int) -> Character {
            Character(UnicodeScalar(97 + index)!)
        }

        // Checks whether the current prefix can be
        // completed into a palindrome greater than target.
        func possible() -> Bool {
            var left = prefix

            // Build the largest possible remaining
            // left half.
            for c in stride(from: 25, through: 0, by: -1) {
                for _ in 0..<halfCount[c] {
                    left.append(char(c))
                }
            }

            // Build palindrome
            var palindrome = left

            if n % 2 == 1 {
                palindrome.append(middle)
            }

            palindrome.append(contentsOf: left.reversed())

            return String(palindrome) > target
        }

        // Build the left half greedily
        for _ in 0..<halfLength {
            var found = false

            // Try the smallest character first
            for c in 0..<26 {
                if halfCount[c] == 0 {
                    continue
                }

                // Try using this character
                halfCount[c] -= 1
                prefix.append(char(c))

                // Can this prefix still lead to
                // a valid answer?
                if possible() {
                    found = true
                    break
                }

                // This choice cannot work.
                // Undo it.
                prefix.removeLast()
                halfCount[c] += 1
            }

            // No character can produce a valid answer
            if !found {
                return ""
            }
        }

        // Construct final palindrome
        var answer = prefix

        if n % 2 == 1 {
            answer.append(middle)
        }

        answer.append(contentsOf: prefix.reversed())

        let result = String(answer)

        // The answer must be strictly greater than target.
        return result > target ? result : ""
    }
}
