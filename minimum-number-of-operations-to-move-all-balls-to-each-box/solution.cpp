class Solution {
public:
    vector<int> minOperations(string boxes) {
        int len = boxes.length(), sum = 0;
        vector<int> ans{};
        for(int i = 0; i < len; ++i)
        {
            sum = 0;
            for(int j = 0; j < len; ++j)
                if(boxes[j] == '1' && i != j)
                    sum += abs(j-i);
            ans.push_back(sum);
        }
        return ans;
    }
};
