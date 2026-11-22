class Solution {
    func isSubPath(_ head: ListNode?, _ root: TreeNode?) -> Bool {    
        guard let root else { return false }
        return isSubPathStartingAt(head, root)  // List starts exactly at root,
            || isSubPath(head, root.left)       // or list starts somewhere in the left tree,
            || isSubPath(head, root.right)      // or list starts somewhere in the right tree.
    
        func isSubPathStartingAt(_ list: ListNode?, _ start: TreeNode?) -> Bool {
            guard let list else { return true }
            guard let start else { return false }
            return list.val == start.val && (                  // List and tree start with the same value and,
                isSubPathStartingAt(list.next, start.left) ||  // rest of the list continues on the left side, or,
                isSubPathStartingAt(list.next, start.right))   // rest of the list continues on the right side.
        }
    }
}
