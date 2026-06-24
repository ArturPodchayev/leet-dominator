func maxWeight(pizzas []int) int64 {
    sort.Ints(pizzas)
    n:=len(pizzas); j:=n-1
    maxW:=0; pair:=n/4
    even:=pair/2; odd:=pair/2
    if pair%2==1{
        even=pair/2
        odd=pair/2+1
    }
    for odd >0 {
        maxW+=pizzas[j]
        j--
        odd--
    }
    for even >0 {
        maxW+=pizzas[j-1]
        j=j-2
        even--
    }
    return int64(maxW)
}
