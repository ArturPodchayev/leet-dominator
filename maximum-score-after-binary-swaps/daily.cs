public class Solution {
    public int AverageOfSubtree(TreeNode root) {
        int count = 0;
        Tuple<int,int> dfs(TreeNode node){
            if(node == null) return Tuple.Create(0,0);
            var left = dfs(node.left);
            var right = dfs(node.right);
            var res = Tuple.Create(left.Item1 + right.Item1 + node.val,1 + left.Item2 + right.Item2);
            if(res.Item1 / res.Item2 == node.val) count++;
            return res;
        }
        dfs(root);
        return count;
    }
}
