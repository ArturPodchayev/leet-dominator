class Solution {
    public boolean isBalanced(TreeNode root) {
        return check(root) != -1;
    }

    private int check(TreeNode node) {
        if (node == null) return 0;

        int left_h = check(node.left);
        if (left_h == - 1) return -1;

        int right_h = check(node.right);
        if (right_h == -1) return -1;

        if (Math.abs(left_h - right_h) > 1) {
            return -1;
        }

        return Math.max(left_h, right_h) + 1;
    }
}
