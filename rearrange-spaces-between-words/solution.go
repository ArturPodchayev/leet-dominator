func reorderSpaces(text string) string {
    words, spaces := strings.Fields(text), strings.Count(text, " ")
    
    if len(words) == 1 {
        return words[0] + strings.Repeat(" ", spaces)
    }
    
    spacesBetween, rem := spaces / (len(words) - 1), spaces % (len(words) - 1)
    
    sep := strings.Repeat(" ", spacesBetween)
    
    return strings.Join(words, sep) + strings.Repeat(" ", rem)
}
