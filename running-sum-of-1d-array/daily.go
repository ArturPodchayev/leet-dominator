func earliestFinishTime(landStartTime []int, landDuration []int, waterStartTime []int, waterDuration []int) int {
    	res := helper(landStartTime, landDuration, waterStartTime, waterDuration)
	res = min(res, helper(waterStartTime, waterDuration, landStartTime, landDuration))
	return res
}

func helper(l1StartTime, l1Duration, l2StartTime, l2Duration [] int) int {
	l1MinEndTime := math.MaxInt
	for i := range l1StartTime {
		l1MinEndTime = min(l1MinEndTime, l1StartTime[i]+l1Duration[i])
	}
	
	l2MinEndTime := math.MaxInt
	for i := range l2StartTime {
		if l1MinEndTime < l2StartTime[i] {
			l2MinEndTime = min(l2MinEndTime, l2StartTime[i]+l2Duration[i])
		} else {
			l2MinEndTime = min(l2MinEndTime, l1MinEndTime + l2Duration[i])
		}
	}
	return l2MinEndTime
}
