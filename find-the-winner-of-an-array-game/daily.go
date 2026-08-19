func maxNumberOfFamilies(n int, reservedSeats [][]int) int {
    maxPair := n*2
    hMap := make(map[int][]int)
    for i:=0;i<len(reservedSeats);i++{
        hMap[reservedSeats[i][0]] = append(hMap[reservedSeats[i][0]],reservedSeats[i][1])
    }
    for key, value := range hMap{
        maxPair = maxPair - 2
        maxPair = maxPair + checkRow(key,value)
        fmt.Println(key,value)
        fmt.Println(maxPair)
    }
    return maxPair
}

func checkRow(rowNum int, bookings []int) int{
    l,m,r := 1,1,1
    for _, value := range bookings{
        if value <= 5 && value >= 2 {
            l = 0 
        }
        if value <= 7 && value >= 4 {
            m = 0
        }
        if value <= 9 && value >= 6 {
            r = 0
        }
    }
    if l+m+r > 2 {
        return 2
    } else if l+m+r == 0 {
        return 0
    } else {
        return 1
    }
}
