class Solution {
    func sortSentence(_ s: String) -> String {
        s
        .split(separator:" ") // split into words
        .sorted{a,b in a.last! < b.last!} // sort by final character
        .map{$0.dropLast()} // remove final character
        .joined(separator: " ") // concatenate words back into a string
    }
}
