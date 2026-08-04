class Solution {
public:
    vector<vector<int>> buildMatrix(int k, vector<vector<int>>& rowConditions, 
    vector<vector<int>>& colConditions) {

        vector<int> rowIndegree(k+1,0);
        vector<int> colIndegree(k+1,0);

        vector<vector<int>> rowAdj(k+1);
        vector<vector<int>> colAdj(k+1);

        for(auto &it:rowConditions){
            int u = it[0];
            int v = it[1];
            rowAdj[u].push_back(v);
            rowIndegree[v]++;
        }

        for(auto &it:colConditions){
            int u = it[0];
            int v = it[1];
            colAdj[u].push_back(v);
            colIndegree[v]++;
        }

        vector<int> rowOrder;
        vector<int> colOrder;

        queue<int> rowQ , colQ;

        for(int i=1; i<=k; i++){
            if(rowIndegree[i] == 0) rowQ.push(i);
            if(colIndegree[i] == 0) colQ.push(i);
        }

        while(!rowQ.empty()){
            int node = rowQ.front();
            rowQ.pop();

            rowOrder.push_back(node);

            for(auto &it:rowAdj[node]){
                rowIndegree[it]--;
                if(rowIndegree[it] == 0){
                    rowQ.push(it);
                }
            }
        }

        while(!colQ.empty()){
            int node = colQ.front();
            colQ.pop();

            colOrder.push_back(node);

            for(auto &it:colAdj[node]){
                colIndegree[it]--;
                if(colIndegree[it] == 0){
                    colQ.push(it);
                }
            }
        }

        for(int i=1; i<=k; i++){
            if(rowIndegree[i] != 0 || colIndegree[i] != 0) return {};
        }

        vector<vector<int>> ans(k,vector<int>(k,0));
        int rowPos = 0, colPos = 0;

        while(rowPos<k){

            int j = colPos;

            if(rowOrder[rowPos] == colOrder[colPos]){
                ans[rowPos][colPos] = rowOrder[rowPos];
                rowPos++;
                colPos++;
                continue;
            }

            while(j<k && colOrder[j] != rowOrder[rowPos]){
                j++;
            }

            if(rowOrder[rowPos] == colOrder[j]){
                ans[rowPos][j] = rowOrder[rowPos];
                rowPos++;
            }
        }

        return ans;
    }
};
