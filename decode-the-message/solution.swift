class Solution {
    func decodeMessage(_ key: String, _ message: String) -> String {
        var array = [UInt8](repeating: 0, count: 26)
        var arrayIndex = 0

        for character in key where character.isValid && array[character.index] == 0 {
            array[character.index] = UInt8(arrayIndex+97)
            arrayIndex += 1
        }
        
        return String(message.map { $0.isValid ? Character(Unicode.Scalar(array[$0.index])) : $0 })
    }
}

extension Character {
    var isValid: Bool { asciiValue! >= 97 && asciiValue! <= 122 }
    var index: Int { Int(asciiValue!) % 97 }
}
