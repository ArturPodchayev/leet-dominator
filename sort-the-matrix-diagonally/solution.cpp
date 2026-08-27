class Solution {
public:
    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {
        int m = mat.size(), n = mat[0].size();
        priority_queue<int, vector<int>, greater<int>> pq;

        // 1. Sort diagonals starting from the first column
        // Lower Triangle and Main Diagonal
        for (int k = 0; k < m; k++) {
            int i = k, j = 0;
            while (i < m && j < n) pq.push(mat[i++][j++]);
            i = k, j = 0;
            while (i < m && j < n) {
                mat[i++][j++] = pq.top();
                pq.pop();
            }
        }

        // 2. Sort diagonals starting from the first row (skip (0,0))
        // Upper Triangle
        for (int k = 1; k < n; k++) {
            int i = 0, j = k;
            while (i < m && j < n) pq.push(mat[i++][j++]);
            i = 0, j = k;
            while (i < m && j < n) {
                mat[i++][j++] = pq.top();
                pq.pop();
            }
        }
        return mat;
    }
};
