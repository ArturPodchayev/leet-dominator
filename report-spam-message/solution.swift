class Solution {
    func reportSpam(_ message: [String], _ bannedWords: [String]) -> Bool {
         var count = 0
        var hashTable: [String: [String]] = [:]
        for string in message {
            if hashTable[string]?.last == string {
                hashTable[string]?.append(string)
            } else {
                hashTable[string] = [string]
            }
        }

        var bannerWords = Set(bannedWords)
        for string in bannerWords {
            if hashTable[string]?.last == string {
                count += hashTable[string]?.count ?? 1
            }
        }

        return count >= 2
    }
}
