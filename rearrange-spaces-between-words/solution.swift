class Solution {
func reorderSpaces(_ text: String) -> String {
    var numberOfWhiteSpaces = text.filter { $0.isWhitespace }.count
    var words = text.split(separator: " ")
    var numberOfWords = words.count
    if numberOfWords == 1 {
        return String(words.first!) + String(repeating: " ", count: numberOfWhiteSpaces)
    }
    var result = ""
    var spacesToAddBetweenWords = numberOfWhiteSpaces / (numberOfWords - 1)
    var numberOfExtraSpace = numberOfWhiteSpaces % (numberOfWords - 1)

    for index in 0..<words.count {
        if index == words.count - 1 {
            result += words[index]
            break
        }
        result += (words[index] + String(repeating: " ", count: spacesToAddBetweenWords))
    }
    
    result += String(repeating: " ", count: numberOfExtraSpace)
 
    
    return result
}
}
