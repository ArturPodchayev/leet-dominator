func numberOfRounds(loginTime string, logoutTime string) int {
	layout := "15:04"
	parseStart, _ := time.Parse(layout, loginTime)
	parseEnd, _ := time.Parse(layout, logoutTime)

	start := roundUp(parseStart)
	end := parseEnd.Truncate(15 * time.Minute)

	if parseEnd.Before(parseStart) {
		end = end.Add(time.Hour * 24)

	}

	diff := end.Sub(start).Minutes() / 15

	if diff < 0 {
		return 0
	}

	return int(math.Ceil(float64(diff)))
}

func roundUp(input time.Time) time.Time {

	mins := input.Minute()
	remainder := mins % 15

	if remainder == 0 {
		return input
	}

	return input.Add(time.Duration(15-remainder) * time.Minute)
}
