class LockingTree {
public:
    LockingTree(const vector<int>& parent) {
        _nodes.resize(size(parent));
        for(size_t i = 0; i < size(parent); ++i) {
            _nodes[i].lock_user = UNLOCK;
            _nodes[i].parent = parent[i];
            if(parent[i] >= 0)
                _nodes[parent[i]].children.push_back(i);
        }
    }

    bool lock(int num, int user) {
        if(_nodes[num].lock_user != UNLOCK) return false;
        _nodes[num].lock_user = user;
        return true;
    }
    
    bool unlock(int num, int user) {
        if(_nodes[num].lock_user != user) return false;
        _nodes[num].lock_user = UNLOCK;
        return true;
    }
    
    bool upgrade(int num, int user) {
        if(locked_path(num)) return false;

        vector<int> locked;
        queue<int> children;
        children.push(num);

        while(!children.empty()) {
            int parent = children.front();
            children.pop();

            for(auto child : _nodes[parent].children) {
                if(_nodes[child].lock_user != UNLOCK)
                    locked.push_back(child);
                children.push(child);
            }
        }

        if(locked.empty()) return false;

        _nodes[num].lock_user = user;
        for(auto node : locked)
            _nodes[node].lock_user = UNLOCK;
        
        return true;
    }

private:
    enum { UNLOCK };

    struct Node {
        int lock_user;
        int parent;
        vector<int> children;
    };

    vector<Node> _nodes;

    bool locked_path(int num) {
        while(true) {
            if(_nodes[num].lock_user != 0) return true;
            if(_nodes[num].parent == -1) break;
            num = _nodes[num].parent;
        }
        return false;
    }
};
