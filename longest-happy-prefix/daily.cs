public class Solution
{
    public TreeNode CreateBinaryTree(int[][] descriptions)
    {
        var dict = new Dictionary<int, TreeNode>();
        var potentialRoots = new HashSet<TreeNode>();

        foreach(var desc in descriptions)
        {
            TreeNode parentNode = GetOrCreateNode(desc[0]);
            TreeNode childNode = GetOrCreateNode(desc[1]);

            if (potentialRoots.Contains(childNode)) // The child node cannot be the root, since it has a parent
            {
                potentialRoots.Remove(childNode);
            }

            switch(desc[2])
            {
                case 0: parentNode.right = childNode; break;
                case 1: parentNode.left = childNode; break;
            }
        }

        return potentialRoots.Single();

        TreeNode GetOrCreateNode(int val)
        {
            if (!dict.TryGetValue(val, out var node))
            {
                node = new TreeNode(val, left: null, right: null);
                dict[val] = node;
                potentialRoots.Add(node);
            }

            return node;
        }
    }
}
