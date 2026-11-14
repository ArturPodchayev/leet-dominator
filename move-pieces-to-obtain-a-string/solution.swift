class Solution {
    func canChange(_ start: String, _ target: String) -> Bool {
        var stack = [(Int, Character)]()

        for (i,c) in target.enumerated(){
            if c != "_" { stack.append((i, c)) }
        }

        for (i,c) in start.enumerated().reversed() where c != "_"{

            if let (position, char) = stack.popLast() {
                if char != c || 
                    c == "R" && position < i ||
                    c == "L" && position > i { return false }
            } else { return false }  
        }
        
        return stack.isEmpty
    }
}
