class EventManager {
public:
    set<pair<int, int>> st; 
    unordered_map<int, int> mp;

    EventManager(vector<vector<int>>& events) {
        for (auto &e : events) {
            int id = e[0];
            int p = e[1];

            st.insert({p, -id});
            mp[id] = p;
        }
    }

    void updatePriority(int eventId, int p) {
        int oldP = mp[eventId];

        st.erase({oldP, -eventId});
        st.insert({p, -eventId});

        mp[eventId] = p;
    }

    int pollHighest() {
        if (st.empty()) return -1;

        auto it = prev(st.end()); 
        int id = -it->second;

        st.erase(it);
        mp.erase(id);

        return id;
    }
};
