func maxDepth(s string) int {
        
    depth := 0
    depth_temp := 0
    for i := 0; i < len(s); i++ {
        if (s[i] == '('){
            depth_temp ++;
            if (depth_temp > depth){
                depth = depth_temp
            }
        }
        if (s[i] == ')'){
            depth_temp --;
        }
    }
    return depth;
}
