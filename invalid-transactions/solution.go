type order struct {
	city  string
	time  int
	money int
	index int
	valid bool
}

func invalidTransactions(transactions []string) []string {
	hash := map[string][]order{}
	for i, tran := range transactions {
		info := strings.Split(tran, ",")
		time, _ := strconv.Atoi(info[1])
		money, _ := strconv.Atoi(info[2])
		hash[info[0]] = append(hash[info[0]], order{
			city:  info[3],
			time:  time,
			money: money,
			index: i,
			valid: money <= 1000,
		})
	}
	invalid := []string{}
	for k := range hash {
		sort.Slice(hash[k], func(i, j int) bool {
			return hash[k][i].time < hash[k][j].time
		})
		for i := range hash[k] {
			if !valid(hash[k], i) {
				invalid = append(invalid, transactions[hash[k][i].index])
			}
		}
	}
	return invalid
}

func valid(orders []order, index int) bool {
	if orders[index].valid == false {
		return false
	}
	for i := index-1; i >= 0; i-- {
		if orders[index].time - orders[i].time > 60 {
			break
		}
		if orders[index].city != orders[i].city {
			orders[index].valid = false
			orders[i].valid = false
		}
	}
	for i := index+1; i < len(orders); i++ {
		if orders[i].time - orders[index].time > 60 {
			break
		}
		if orders[index].city != orders[i].city {
			orders[index].valid = false
			orders[i].valid = false
		}
	}
	return orders[index].valid
}
