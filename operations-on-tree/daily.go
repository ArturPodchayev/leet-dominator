import "slices"

func maxIceCream(costs []int, coins int) int {
    slices.Sort(costs)
    ctr := 0
    for _, cost := range costs {
        if coins < cost {
            break
        }
        coins = coins - cost
        ctr++
    }
    return ctr
}
