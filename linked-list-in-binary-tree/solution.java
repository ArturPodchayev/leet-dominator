class Solution {
    public boolean isSubPath(ListNode head, TreeNode root) {
        if(root==null) return false;
        if(pathtrue(head,root)) return true;
        return isSubPath(head,root.left) || isSubPath(head,root.right);
    }
    public boolean pathtrue(ListNode head,TreeNode root){
        if(head==null) return true;
        if(root==null || head.val!=root.val) return false;
        return pathtrue(head.next , root.left) || pathtrue(head.next,root.right);
    }
}
