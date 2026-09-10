/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfSubtree(root: TreeNode | null): number {
    let result = 0;

    function dfs(root: TreeNode | null) {
        // Base condition - If the node is null, just return.
        if(root == null){
            return [0, 0]
        }
        
        // Base condition - If the leave node, return the value of the node, and the count as 1;
        if(root.left == null && root.right == null){
            result += 1;
            return [root.val, 1];
        }

        // This is inorder traversal, in which root node will be processed after processing left and right substree.
        // Recursively get the sum and number of nodes in left and right subtree.
        const [leftSum, leftCount] = dfs(root.left);
        const [rightSum, rightCount] = dfs(root.right);

        // Now you can make decision about the node you are currently at.
        const sumAtRoot = leftSum + rightSum + root.val;
        const countAtRoot = leftCount + rightCount + 1;

        if(Math.floor(sumAtRoot / countAtRoot) === root.val){
            result += 1;
        }

        // Regardless, return the sum, and count of nodes in this subtree for it's parent node.
        return [sumAtRoot, countAtRoot]
    }

    dfs(root);

    return result;
};
