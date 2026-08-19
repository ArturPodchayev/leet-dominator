class Solution {
public:
    int getWinner(vector<int>& arr, int k) {
        deque<int> Q(arr.begin(),arr.end());
        int Winner = INT_MIN;
        int count = 0 ;
        int n= arr.size();
        for(int i= 0 ; i<n && count!=k ;i++){
            int max = (Q[0]>Q[1])?Q[0]:Q[1];
            int min = (Q[0]>Q[1])?Q[1]:Q[0];
            Q.pop_front();
            Q.pop_front();
            Q.push_back(min);
            Q.push_front(max);
            if(Winner==max && count!=k){
                count++;
            }else{
                count= 1;
                Winner = max;
            }
        }
        if(!Q.empty()){
            return Q.front() ;
        }
        return 0 ;
        
    }
};
