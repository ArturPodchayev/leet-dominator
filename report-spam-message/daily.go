func busiestServers(k int, arrival []int, load []int) []int {
    serverReqCount := make([]int, k)
    servers := make([]int, k)
    
    maxRequestServed := 0  // max request served by any sever 
    
    for i:=0; i<len(arrival); i++ {
        arrivalTime := arrival[i]
        duration := load[i]
        nextServer := i % k // request will go to this server as per questioon
        for j:=0; j<k; j++ { // iterate over all servers 
            if nextServer == k {  // reached to last server, start from frist
                nextServer = 0
            }
            if servers[nextServer] <= arrivalTime {
                servers[nextServer] = arrivalTime + duration  // serving requat till this time
                serverReqCount[nextServer]++
                
                if maxRequestServed < serverReqCount[nextServer] {
                    maxRequestServed = serverReqCount[nextServer]
                }
                break
            }
            nextServer++
        }
    
    }
    
    result := []int{}
    // all servers which served max request
    for i:=0; i<len(serverReqCount); i++ {
        if serverReqCount[i] == maxRequestServed {
            result = append(result, i)
        }
    }
    
    return result
}
