func maxProduct(n int) int {
    first := 0
    second := 0
    for n > 0 {
        ost := n % 10
        n = n / 10
        if first < ost {
            second = first
            first = ost
        } else if second < ost {
            second = ost
        } else if second == 9 && first == 9 {
            return 81
        }
    }
    return first * second
}
