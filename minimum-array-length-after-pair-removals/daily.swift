func isValid(_ s: String) -> Bool {
    var stack = [Character]()
    let parenMap:[Character:Character] = ["(":")", "[":"]", "{":"}"]
    for c in s {
        if parenMap.keys.contains(c) {
            stack.append(c)
        } else if stack.isEmpty || c != parenMap[stack.popLast()!] {
            return false
        }
    }
    return stack.isEmpty
}
