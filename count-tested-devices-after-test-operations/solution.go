func countTestedDevices(batteryPercentages []int) int {
    count := 0
    reduction := 0 
    for _,v := range batteryPercentages {
        if v - reduction > 0 {
            reduction++
            count++
        }
    }
    return count
}
