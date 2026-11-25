func minNumberOfSemesters(n int, relations [][]int, k int) int {

	// prerequisites
    pre := make([]int, n)
	for _, relation := range relations {
		pre[relation[1]-1] |= 1 << (relation[0] - 1)
	}

    // deque of states and costs
	states := []int{0}
	costs := []int{0}

    // set of added states
	added := map[int]struct{}{0: struct{}{}}

	for cur := 0; cur < (1 << n); cur++ {

        // take current state from the deque
		state := states[cur]
		cost := costs[cur]

        // took all courses
		if state == (1<<n)-1 {
			return cost
		}

        // find courses that are already unblocked and not yet taken 
		courses := []int{}
		next := state
		for course := 0; course < n; course++ {
			bit := 1 << course
			if state&bit != 0 || pre[course]&state != pre[course] {
				continue
			}
			courses = append(courses, course)
			next |= bit
		}

        // if <= k, take them all
		if len(courses) <= k {
			if _, ok := added[next]; ok {
				continue
			}
			added[next] = struct{}{}
			states = append(states, next)
			costs = append(costs, cost+1)
			continue
		}

        // else take all subsets of size k
		var addStates func(next, k, from int)
		addStates = func(next, k, from int) {
			if k == 0 {
				if _, ok := added[next]; ok {
					return
				}
				added[next] = struct{}{}
				states = append(states, next)
				costs = append(costs, cost+1)
				return
			}
			if k > len(courses)-from {
				return
			}
			for index := from; index < len(courses)-k+1; index++ {
				addStates(next|(1<<courses[index]), k-1, index+1)
			}
		}
		addStates(state, k, 0)
	}
	return 0
}
