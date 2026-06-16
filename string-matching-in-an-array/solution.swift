class Solution {
  
  func stringMatching(_ words: [String]) -> [String] {
    
    var returnArray: [String] = []
    
    for word1 in words {
        
        for word2 in words {
            
            if word1 != word2 && word2.contains(word1) {
                returnArray.append(word1)
                break
            }
        }
    }
    return returnArray
}
}
