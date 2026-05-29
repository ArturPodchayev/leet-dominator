class Solution {
public:
    int check(TreeNode* root) {
        if (root == NULL)
            return 0;
        int left = check(root->left);
        int right = check(root->right);
        if (left == -1 || right == -1)
            return -1;
        if (abs(left - right) > 1)
            return -1;
        return max(left, right) + 1;
    }
    bool isBalanced(TreeNode* root) { return check(root) != -1; }
};
