
var flowertypes []int = []int{1, 2, 3, 4}
type Garden struct {
	assigntype int
	connected  []*Garden
}
func gardenNoAdj(N int, paths [][]int) []int {
	gardens := make([]*Garden, N)
	for idx, garden := range gardens {
		garden = &Garden{assigntype: -1, connected: make([]*Garden, 0)}
		gardens[idx] = garden
	}
	//GENERATE PATH MAP
	for _, val := range paths {
		a, b := val[0], val[1]
		ga := gardens[a-1]
		gb := gardens[b-1]
		ga.connected = append(ga.connected, gb)
		gb.connected = append(gb.connected, ga)
	}
	result := make([]int, N)
	// for i := 0; i < N; i++ {
	// 	result[i] = 1
	// }
	for idx, garden := range gardens {
		//PROCESS CONNECTED GARDENS
		flowermap := make(map[int]bool)
		// fmt.Print("Garden -" + strconv.Itoa(idx) + " - ")
		for _, cgar := range garden.connected {
			// fmt.Print("Connected Gardens" + strconv.Itoa(cgar.assigntype))
			if cgar.assigntype != -1 {
				flowermap[cgar.assigntype] = true
			}
		}
		// fmt.Println(flowermap)
		for _, val := range flowertypes {
			if _, ok := flowermap[val]; !ok {
				garden.assigntype = val
				// fmt.Println("Assigned Val - " + strconv.Itoa(val))
				// gardens[idx] = garden
				// result = append(result, val)
				result[idx] = val
				break
			}
		}
	}
	return result
}
