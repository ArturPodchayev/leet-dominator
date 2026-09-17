class ATM {
public:
    vector<int> arr;
    ATM() {
        arr = vector<int>(5,0);
    }
    
    void deposit(vector<int> banknotesCount) {
        for(int i = 0;i < banknotesCount.size();i++)
            arr[i] += banknotesCount[i];
    }
    
    vector<int> withdraw(int amount) {
        vector<int> ans(5,0);
        for(int i = arr.size()-1; i >= 0;i--) {
            int note = 500;
            if(i == 0)
                note = 20;
            else if(i == 1)
                note = 50;
            else if(i == 2)
                note = 100;
            else if(i == 3)
                note = 200;

            int quo = amount / note;
            ans[i] = min(quo,arr[i]);
            amount -= ans[i] * note;
        }
        if(amount != 0)
            return {-1};
        for(int i = 0;i < arr.size();i++)
            arr[i] -= ans[i];
        return ans;
    }
};

/**
 * Your ATM object will be instantiated and called as such:
 * ATM* obj = new ATM();
 * obj->deposit(banknotesCount);
 * vector<int> param_2 = obj->withdraw(amount);
 */
