public class Solution {
    public bool IsSubPath(ListNode head, TreeNode root) {
        bool DFS(ListNode lnode, TreeNode tnode){
            if(lnode == null){
                return true;
            }
            if(tnode == null || lnode.val != tnode.val){
                return false;
            }
            return (DFS(lnode.next, tnode.left) || DFS(lnode.next, tnode.right));
        }

        if(DFS(head,root)){
            return true;
        }
        if(root == null){
            return false;
        }
        return (IsSubPath(head,root.left) || IsSubPath(head,root.right));
    }
}
