type key struct {
    n int // node value
    t int // time
}

type key2 struct {
    c int // total cost
    n int // node value
    t int // time
    v map[int] bool // whether we have already visited a node.
}

func edgesIntoMap(edges [][]int) map[int] []key {
    /*
    Make edges into a map
    */
    
    m := make(map[int] []key)
    
    for _, edge := range edges { // putting all edges into a map
        m[edge[0]] = append(m[edge[0]], key{ edge[1], edge[2] })
        m[edge[1]] = append(m[edge[1]], key{ edge[0], edge[2] })
    }
    
    return m
}

func remakeMap(oldMap map[int] bool) map[int] bool {
    /*
    We can make a new map which is the same as the old map,
    so when we mutate this new map it doesn't change the old one
    */
    
    newMap := make(map[int] bool)
    
    for k,v := range oldMap { 
        newMap[k] = v 
    }
    
    return newMap
}

func maximalPathQuality(values []int, edges [][]int, maxTime int) int {
    max := values[0]
    m := edgesIntoMap(edges)
    
    stack := []key2{ key2{ values[0], 0, 0, map[int] bool{} } }
    
    for len(stack) != 0 {
        pop := stack[len(stack) - 1]
        stack = stack[:len(stack) - 1]
        
        if pop.n == 0 && pop.c > max { 
            // We have come back to the zero node, so we can remake max
            max = pop.c
        }
        
        for _, connection := range m[pop.n] {
            if pop.t + connection.t <= maxTime {
                // We only add the value to our result if we have not already been to the node.
                
                cost := pop.c
                if !pop.v[connection.n] { 
                    cost += values[connection.n] 
                }
                
                newMap := remakeMap(pop.v)
                newMap[pop.n] = true
                
                // Pushing to the stack
                
                stack = append(stack, key2{ 
                    cost,
                    connection.n, 
                    pop.t + connection.t,
                    newMap,
                })
                
            }
        }
    }
    
    return max
}
