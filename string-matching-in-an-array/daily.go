func processStr(s string) string {
    result := ""

    for _, c := range s {
        if c >= 'a' && c <= 'z' {
            result += string(c)

        } else if c == '*' {
            if len(result) > 0 {
                result = result[:len(result)-1]
            }

        } else if c == '#' {
            result += result

        } else if c == '%' {
            chars := []rune(result)

            for l, r := 0, len(chars)-1; l < r; l, r = l+1, r-1 {
                chars[l], chars[r] = chars[r], chars[l]
            }

            result = string(chars)
        }
    }

    return result
}
