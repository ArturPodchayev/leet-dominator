class Solution {
    TreeNode* buildBinaryTree(int parentNode, unordered_map<int, pair<int, int>>& nodes) {
        if (nodes.find(parentNode) == nodes.end()) {
            return new TreeNode(parentNode);
        }
        
        TreeNode *leftTree = nullptr, *rightTree = nullptr;
        
        if (nodes[parentNode].first != 0) leftTree = buildBinaryTree(nodes[parentNode].first, nodes);
        if (nodes[parentNode].second != 0) rightTree = buildBinaryTree(nodes[parentNode].second, nodes);

        return new TreeNode(parentNode, leftTree, rightTree);
    }

public:
    TreeNode* createBinaryTree(vector<vector<int>>& descriptions) {
        unordered_map<int, pair<int, int>> nodes;
        unordered_set<int> childNodes;
        int rootNode = -1;
        for (int i = 0; i < descriptions.size(); i++) {
            int parent = descriptions[i][0], child = descriptions[i][1], isLeft = descriptions[i][2];
            childNodes.insert(child);
            
            if (isLeft) nodes[parent].first = child;
            else nodes[parent].second = child;
        }
        
        for (const auto& val: descriptions) {
            if (childNodes.find(val[0]) == childNodes.end()) {
                rootNode = val[0];
                break;
            }
        }
        return buildBinaryTree(rootNode, nodes);
    }
};
