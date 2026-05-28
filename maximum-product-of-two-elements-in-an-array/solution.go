func maxProduct(nums []int) int {
    
    var b1, b2 int

    for _, v := range nums {
       if v >= b1 {
            b2 = b1
            b1 = v
       } else if v <= b1 && v > b2 {
            b2 = v
       }
    }

    return (b1 - 1) * (b2 - 1)
}
