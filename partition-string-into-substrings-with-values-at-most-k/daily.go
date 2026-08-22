func checkDivisibility(n int) bool {
    org:=n
    var digits []int
    for n>0{
        digits=append(digits,n%10)
        n/=10
    }
    sum,product:=0,1
    for _,d:= range digits{
        sum+=d
        product *=d
    }
    sum+=product
    return org%sum==0
}
