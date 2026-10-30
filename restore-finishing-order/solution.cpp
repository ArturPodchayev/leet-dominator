class Solution {
public:
    vector<int> recoverOrder(vector<int>& order, vector<int>& friends) {
        vector<int>v;
        for(int i = 0 ; i < order.size() ; i++)
        {
            int start = 0 , end = friends.size() - 1; 
            while(start <= end)
            {
                int mid = start + (end - start) / 2;
                if(order[i] == friends[mid])
                {
                    v.push_back(friends[mid]);
                    break;
                }
                else if(order[i] > friends[mid])
                    start = mid + 1;
                else
                    end = mid - 1;
            }
        }
        return v;
    }
};
