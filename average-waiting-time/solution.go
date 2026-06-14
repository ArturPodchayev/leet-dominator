func averageWaitingTime(customers [][]int) float64 {
	var totalWaitTime int
	var currentTime int = customers[0][0] // set initial time to the arrival time of first customer

	for _, customer := range customers {
		arrivalTime := customer[0]
		waitTime := customer[1]

		// check if customer arrived when there were customers on ground or way after
		if currentTime < arrivalTime {
			currentTime = arrivalTime
		}

		currentTime += waitTime // update the current time

		totalWaitTime += currentTime - arrivalTime
	}

	return float64(totalWaitTime) / float64(len(customers))
}
