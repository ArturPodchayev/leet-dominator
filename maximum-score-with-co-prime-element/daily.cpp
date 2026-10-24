class Solution {
public:
    int countDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob) {
        int m1 = stoi(arriveAlice.substr(0, 2));
        int m2 = stoi(leaveAlice.substr(0, 2));
        int d1 = stoi(arriveAlice.substr(3, 2));
        int d2 = stoi(leaveAlice.substr(3, 2));

        int m3 = stoi(arriveBob.substr(0, 2));
        int m4 = stoi(leaveBob.substr(0, 2));
        int d3 = stoi(arriveBob.substr(3, 2));
        int d4 = stoi(leaveBob.substr(3, 2)); 

        vector<int> days = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        vector<int> pref(12, 0);
        pref[0] = 31;
        for(int i=1;i<12;i++){
            pref[i] = days[i] + pref[i-1];
        }


        int ans = 0;

        int t1 = pref[m1-1] + d1 - days[m1-1];
        int t2 = pref[m2-1] + d2 - days[m2-1];

        int t3 = pref[m3-1] + d3 - days[m3-1];
        int t4 = pref[m4-1] + d4 - days[m4-1];

        // cout<<t1<<" "<<t2<<" "<<t3<<" "<<t4<<endl;

        if(t1<=t3 && t4<=t2){
            ans = (t4-t3+1);
        }
        else if(t3<=t1 && t2<=t4){
            ans = (t2-t1+1);
        }
        else if(t1<=t3 && t3<=t2){
            ans = (t2-t3+1);
        }
        else if(t3<=t1 && t1<=t4){
            ans = (t4-t1+1);
        }

        

        return ans;

    }
};
