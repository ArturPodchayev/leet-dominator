import "strings"
func generateTheString(n int) string {
    if n % 2 == 0{
        return strings.Repeat("z", n-1) + "q"
    }
    return strings.Repeat("z", n)
}
