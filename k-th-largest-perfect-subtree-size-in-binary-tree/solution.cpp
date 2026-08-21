class Solution {
public:
    pair<int, bool> check(TreeNode* root, vector<int>& arr) {
        if (!root) return {0, true}; 
        
        auto left = check(root->left, arr);
        auto right = check(root->right, arr);
        
        if (left.second && right.second && left.first == right.first) {
            int height = left.first + 1;
            int size = (1 << height) - 1;
            arr.push_back(size); 
            return {height, true}; 
        }

        return {0, false}; 
    }

    int kthLargestPerfectSubtree(TreeNode* root, int k) {
        vector<int> arr;

        check(root, arr);

        sort(arr.rbegin(), arr.rend());

        if (arr.size() < k) return -1;

        return arr[k - 1]; 
    }
};
