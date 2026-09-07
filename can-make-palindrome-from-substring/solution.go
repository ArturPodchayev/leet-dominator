func canMakePaliQueries(s string, queries [][]int) []bool {
    states := make([]uint32, len(s))
    
    var prev uint32
    for i := range s {
        prev ^= 1 << uint32(s[i] - 'a') // toggle bit
        states[i] = prev
    }
    
    ans := make([]bool, len(queries))
    for i, q := range queries {
        var state uint32
        if q[0] == 0 {
            state = states[q[1]]
        } else {
            state = states[q[1]] ^ states[q[0] - 1]
        }
        
        ans[i] = q[2] >= bits.OnesCount32(state) / 2
    }
    
    return ans 
}
