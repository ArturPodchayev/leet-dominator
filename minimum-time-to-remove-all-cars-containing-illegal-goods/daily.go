import "sort"
func minimumCost(cost []int) int {
    sort.Ints(cost)
    sum :=0
    k := 0
    for i := len(cost)-1; i >= 0; i--{
        if k!=2 {
            sum = sum + cost[i]
            k++
        }else{
            k = 0
        }
    }

    return sum
}
