func findLonely(nums []int) []int {
    m:= make(map[int]int)
    s:=make([] int,0)
    for _,value:=range nums{
        m[value]++;
    }
    for i:=0;i<len(nums);i++ {
        if(m[nums[i]+1]!=0||m[nums[i]-1]!=0||m[nums[i]]>1){
            continue;
        }else{
            s=append(s,nums[i])
        }
    }
    return s
}
