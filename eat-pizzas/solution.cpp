class Solution {
public:
    long long maxWeight(vector<int>& pizzas) {
        int n = pizzas.size();
        sort(pizzas.begin(), pizzas.end());

        long long ans = 0;
        int cnt = 0;
        int i = n-1;
        if((n/4)%2==1) cnt = (n/4)/2 + 1;
        else cnt = (n/4)/2;
        while(cnt){
            ans += pizzas[i];
            i--;
            cnt--;
        }
        i--;
        cnt = (n/4)/2;
        while(cnt){
            ans += pizzas[i];
            i -= 2;
            cnt--;
        }
        return ans;
    }
};
