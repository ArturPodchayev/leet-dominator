public class Solution {
    public IsBalanced(TreeNode root)
    {
        return HeightAndBalanceStatus(root).isBalanced;
    }

    private (int height, bool isBalanced) HeightAndBalanceStatus(TreeNode root)
    {
        if (root == null) return (0, true);

        var (leftHeight, leftBalanced) = HeightAndBalanceStatus(root.left);
        var (rightHeight, rightBalanced) = HeightAndBalanceStatus(root.right);

        var height = Math.Max(leftHeight, rightHeight) + 1;

        if(!leftBalanced || !rightBalanced) return (height, false);
        if (Math.Abs(leftHeight - rightHeight) > 1) return (height, false);

        return (height, true);
    }
}
