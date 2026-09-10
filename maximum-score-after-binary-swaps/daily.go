func averageOfSubtree(root *TreeNode) int {

    _,_,macthes:=dfs(root)
    return macthes
    
}

func dfs(node *TreeNode) (int, int, int) {
    if node == nil {
        return 0, 0, 0
    }

    leftsum, leftcount,leftmatch := dfs(node.Left)
    rigthsum, rightcount, rightmacth:= dfs(node.Right)

    sum:= leftsum+rigthsum +node.Val
    count:=leftcount+rightcount+1
    macthes:=leftmatch+rightmacth

    if sum/count == node.Val {
        macthes++
    }
    return sum, count, macthes
}
 
