class Solution {
public:
    struct Transcation{
        string original;
        string name;
        int time;
        int amount;
        string city;
    };

    vector<string> invalidTransactions(vector<string>& transactions) {
       vector<Transcation> parsedList;
        int n = transactions.size();
        vector<bool> isInvalid(n, false);

       for(auto t: transactions)
       {
            stack<string>st;
            string temp="";
            for(auto str: t)
            {
                if(str!=',')
                {
                    temp=temp+str;
                }
                else
                {
                    st.push(temp);
                    temp="";
                }

            }
            st.push(temp);

            string place= st.top(); st.pop();
            string amount= st.top(); st.pop();
            string time= st.top(); st.pop();
            string name= st.top();
            st.pop();

            parsedList.push_back({t,name, stoi(time), stoi(amount), place});

       }

      
      for(int i=0;i<n;i++)
      {
        if(parsedList[i].amount>1000)
        {
            isInvalid[i]=true;
        }
        for(int j=0;j<n;j++)
        {
            if(i==j) continue;
            if(parsedList[i].name==parsedList[j].name && parsedList[i].city!=parsedList[j].city  )
            {
                if(abs(parsedList[i].time-parsedList[j].time)<=60)
                {
                    isInvalid[i]=true;
                    isInvalid[j]=true;
                }
            }
        }
      }

      vector<string> invalid;
        for (int i = 0; i < n; i++) {
            if (isInvalid[i]) {
                invalid.push_back(parsedList[i].original);
            }
        }

        return invalid;

    }
};
