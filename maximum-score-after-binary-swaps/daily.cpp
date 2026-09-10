class Solution {
public:
    int averageOfSubtree(TreeNode* root) {
        int res = 0;

        function<pair<int,int>(TreeNode*)> dfs = [&](TreeNode* root) -> pair<int,int> {
            if (!root) return {0, 0};

            auto l = dfs(root->left);
            auto r = dfs(root->right);

            int sum = l.first + r.first + root->val;
            int cnt = l.second + r.second + 1;

            if (sum / cnt == root->val) res++;

            return {sum, cnt};
        };

        dfs(root);
        return res;
    }
};
