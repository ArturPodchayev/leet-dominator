function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;

    let isGood = true;

    let go = (node: TreeNode): number => {
        if (!isGood) return 0;

        let leftLength = 0; 
        let rightLength = 0; 

        if (node.left) {
            leftLength = go(node.left);
        }

        if (node.right) {
            rightLength = go(node.right);
        }

        if (Math.abs(leftLength - rightLength) > 1) {
            isGood = false;
        }

        return Math.max(leftLength, rightLength) + 1;
    }

    go(root);

    return isGood;
};
