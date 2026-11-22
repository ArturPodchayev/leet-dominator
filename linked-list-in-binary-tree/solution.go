func validateNodes(head *ListNode, root *TreeNode) bool {
    if root == nil {
        return head == nil
    }
    if head == nil {
        return true
    }
    if head.Val != root.Val {
        return false
    }
    return validateNodes(head.Next, root.Left) || validateNodes(head.Next, root.Right)
}
func isSubPath(head *ListNode, root *TreeNode) bool {
    if root == nil {
        return false
    }
    if head.Val == root.Val {
        if validateNodes(head, root) {
            return true
        }
    }
    return isSubPath(head,root.Left) || isSubPath(head,root.Right)
}
