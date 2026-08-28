func numberOfWeeks(milestones []int) int64 {
	var max int = 0
	var counter int = 0
	if len(milestones) < 2 {
		return 1
	}
	for i := 0; i < len(milestones); i++ {
		if milestones[i] > max {
			max = milestones[i]
		}
		counter += milestones[i]
	}

	if counter-max >= max-1 {
		return int64(counter)
	} else {
		return int64(((counter - max) * 2) + 1)
	}
}
