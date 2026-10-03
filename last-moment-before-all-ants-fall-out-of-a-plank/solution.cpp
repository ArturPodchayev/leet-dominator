class Solution {
public:
    int getLastMoment(int n, vector<int>& left, vector<int>& right) {
        for(int i=0; i<right.size(); i++){
            right[i]=n-right[i];
        }
        if(right.begin()==right.end()){
            return(*max_element(left.begin(),left.end()));
        }
        else if(left.begin()==left.end()){
            return(*max_element(right.begin(),right.end()));
        }
        return max(*max_element(right.begin(),right.end()),*max_element(left.begin(),left.end()));
    }
};
