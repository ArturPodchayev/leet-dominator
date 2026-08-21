public class Solution {
    private List<int> res;
    private (bool, int) DFS(TreeNode root)
    {
        if(root == null)
            return (false, 0);

        if(root.left == null && root.right == null)
        {
            res.Add(1);
            return (true, 1);
        }

        var leftSub = DFS(root.left);
        var rightSub = DFS(root.right);
        if(!leftSub.Item1 || !rightSub.Item1 || leftSub.Item2 != rightSub.Item2)
            return (false, 0);

        int curTotal = 1+2*leftSub.Item2;
        res.Add(curTotal);
        return (true, curTotal);
    }
    public int KthLargestPerfectSubtree(TreeNode root, int k) {
        res = new List<int>();
        DFS(root);
        if(k > res.Count)
            return -1;

        res = res.OrderByDescending(x=>x).ToList();
        return res[k-1];
    }
}
