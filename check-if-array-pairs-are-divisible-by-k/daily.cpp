class Solution {
    struct State {
        int l;
        int r;
        long long diff;

        State(int l, int r, long long diff) {
            this->l = l;
            this->r = r;
            this->diff = diff;
        }
    };

    struct Compare {
        bool operator()(const State& a, const State& b) const {
            return a.diff < b.diff; // Max Heap
        }
    };

    class SegmentTree {
        struct Node {
            int s;
            int e;
            int mini;
            int maxi;

            Node* left;
            Node* right;

            Node(int s, int e) {
                this->s = s;
                this->e = e;
                mini = INT_MAX;
                maxi = INT_MIN;
                left = nullptr;
                right = nullptr;
            }
        };

        Node* root;

        Node* build(vector<int>& nums, int s, int e) {
            Node* node = new Node(s, e);

            if (s == e) {
                node->mini = nums[s];
                node->maxi = nums[s];
                return node;
            }

            int mid = (s + e) / 2;

            node->left = build(nums, s, mid);
            node->right = build(nums, mid + 1, e);

            node->mini = min(node->left->mini, node->right->mini);
            node->maxi = max(node->left->maxi, node->right->maxi);

            return node;
        }

        pair<int, int> get(Node* node, int l, int r) {
            if (node == nullptr) {
                return {INT_MAX, INT_MIN};
            }

            if (l <= node->s && node->e <= r) {
                return {node->mini, node->maxi};
            }

            if (node->e < l || r < node->s) {
                return {INT_MAX, INT_MIN};
            }

            auto leftAns = get(node->left, l, r);
            auto rightAns = get(node->right, l, r);

            int mini = min(leftAns.first, rightAns.first);
            int maxi = max(leftAns.second, rightAns.second);

            return {mini, maxi};
        }

    public:
        SegmentTree(vector<int>& nums) {
            root = build(nums, 0, nums.size() - 1);
        }

        pair<int, int> get(int l, int r) {
            return get(root, l, r);
        }
    };

public:
    long long maxTotalValue(vector<int>& nums, int k) {
        int n = nums.size();

        SegmentTree seg(nums);

        priority_queue<State, vector<State>, Compare> pq;

        for (int l = 0; l < n; l++) {
            int r = n - 1;

            auto p = seg.get(l, r);

            long long diff = (long long)p.second - p.first;

            pq.push(State(l, r, diff));
        }

        long long sum = 0;

        while (k-- > 0) {
            State cur = pq.top();
            pq.pop();

            sum += cur.diff;

            int l = cur.l;
            int r = cur.r - 1;

            if (l <= r) {
                auto p = seg.get(l, r);

                long long diff = (long long)p.second - p.first;

                pq.push(State(l, r, diff));
            }
        }

        return sum;
    }
};
