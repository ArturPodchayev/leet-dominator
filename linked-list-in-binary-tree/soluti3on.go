/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSubPath(head *ListNode, root *TreeNode) bool {
    // BFS
    var q = []*TreeNode{root}

    for len(q) > 0 {
        if q[0].Val == head.Val && dfs(head, q[0]) {
            return true
        }
        
        if q[0].Left != nil {
            q = append(q, q[0].Left)
        }
        if q[0].Right != nil {
            q = append(q, q[0].Right)
        }

        q = q[1:]
    }

    return false
}

// DFS
func dfs(head *ListNode, r *TreeNode) bool{
    if head == nil {
        return true
    } else if r == nil {
        return false
    } else if r.Val != head.Val {
        return false
    }

    head = head.Next

    return dfs(head, r.Left) || dfs(head, r.Right)
}
