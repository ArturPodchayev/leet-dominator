/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func isBalanced(root *TreeNode) bool {

    balanced := true

    var dfs func(*TreeNode) int

    dfs = func(node *TreeNode) int {
        if node == nil {
            return -1
        }

        lh := dfs(node.Left)
        rh := dfs(node.Right)

        // convenient way to calculate Math.Abs on integer
        if max(lh, rh) - min(lh, rh) > 1 {
            balanced = false
        }

        return max(lh, rh) + 1
    }


    dfs(root)

    return balanced
}
