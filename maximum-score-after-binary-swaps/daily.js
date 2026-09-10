/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    var result = 0;

    var dfs = function (node) {
        // Init with zeroes (in case of empty subtree)
        let leftTree = {
                count: 0,
                sum: 0
            },
            rightTree = {
                count: 0,
                sum: 0
            };

        // First get the subtree values
        if (node.left) leftTree = dfs(node.left);
        if (node.right) rightTree = dfs(node.right);

        // Calculate sum and the count
        var sum = node.val + leftTree.sum + rightTree.sum,
            count = 1 + leftTree.count + rightTree.count;

        // Check if we match
        if (Math.floor(sum / count) == node.val) {
            result++;
        }

        // Pass on the current sum and node count
        return {
            sum,
            count
        }
    }

    dfs(root);

    return result;
};
