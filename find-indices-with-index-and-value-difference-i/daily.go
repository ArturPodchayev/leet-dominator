func earliestFinishTime(
    landStartTime []int,
    landDuration []int,
    waterStartTime []int,
    waterDuration []int,
) int {
    const INF = int(1e9)

    ans := INF

    for i := 0; i < len(landStartTime); i++ {
        for j := 0; j < len(waterStartTime); j++ {

            // Case 1: land ride first, then water ride
            landFinish := landStartTime[i] + landDuration[i]
            waterActualStart := max(waterStartTime[j], landFinish)
            finishLandThenWater := waterActualStart + waterDuration[j]

            ans = min(ans, finishLandThenWater)

            // Case 2: water ride first, then land ride
            waterFinish := waterStartTime[j] + waterDuration[j]
            landActualStart := max(landStartTime[i], waterFinish)
            finishWaterThenLand := landActualStart + landDuration[i]

            ans = min(ans, finishWaterThenLand)
        }
    }

    return ans
}
