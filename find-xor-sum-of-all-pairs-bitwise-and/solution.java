class Solution 
{
    public:
    
    int getXORSum(vector<int>& arr1, vector<int>& arr2) 
    {
        int n = (int)arr1.size();
        int m = (int)arr2.size();

        int XOR = 0;

        for(int i=0; i<m; ++i)
        {
            XOR ^= arr2[i];
        }

        int answer = 0;

        for(int i=0; i<n; ++i)
        {
            answer ^= (arr1[i] & (XOR));
        }
        return answer;
        
    }
};
