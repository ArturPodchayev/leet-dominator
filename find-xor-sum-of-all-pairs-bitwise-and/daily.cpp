class Solution {
public:
    vector<int> lexicographicallySmallestArray(vector<int>& nums, int limit) {

        vector<pair<int,int>> a; 
        int n = nums.size();

        // store element with its original index 
        for(int i = 0; i < n ; i++) a.push_back({nums[i] , i});
        
        // sort them to form the grouping  
        sort(a.begin(),a.end());

        //we will take 2d vector in we store vector of connected
        // componenet in val and its indx of these connected 
        //component in indx vector 
        vector<vector<int>> val, indx ;

        // we store our first element to very first group 
        val.push_back({a[0].first});
        indx.push_back({a[0].second});

        int j = 0;
        int prev = a[0].first ;

        // now start from the second position of the sorted 
        //array 'a' check weather it is in prev group or 
        // have to form new gruop for that element 

        for(int i = 1; i < n; i++) {

            int val1 = a[i].first ;
            // curr element is in previous group
            if(abs(val1-prev) <= limit) {

                val[j].push_back(val1);
                indx[j].push_back(a[i].second);

            }
            // have to form new group for this element
            else {

                j++;
                val.push_back({val1});
                indx.push_back({a[i].second});

            }

            prev = a[i].first;
        }

        //sort the indx array of each group which we have created 
        // during grouping 
        for(auto &it: indx) {
            sort(it.begin(),it.end());
        }

        // storing our final ans to the array  
        vector<int> ans(n,0);

        for(int i = 0; i < val.size(); i++) {
            for(int j = 0; j < val[i].size(); j++) {

                ans[indx[i][j]] = val[i][j];

            }
        }

        return ans; 

    }
};
