func minimumTime(s string) int {
    nums:=make([]int,len(s))
    for i,v:=range s{
        nums[i]=1
        if string(v)=="0"{
            nums[i]=-1
        }
    }
    min:=0
    sum:=0
    for _,v:=range nums{
        sum+=v
        if sum>0{
            sum=0
        }
        if sum<min{
            min=sum
        }
    }
    return len(s)+min
}
