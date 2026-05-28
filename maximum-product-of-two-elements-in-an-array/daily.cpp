class Trie{
    struct Node{
        int index;
        int children[26];
        Node(){
            index=-1;
            fill(children, children+26,-1);
        }
    };

    vector<Node> head;

public:
    Trie(){
        head.push_back(Node());
    }

    void add(int index,string& s,vector<string>& strs){
        int n = s.size();
        int curr = 0;

        if(head[curr].index==-1) head[curr].index=index;
        else if(strs[head[curr].index].size() > s.size()) head[curr].index=index;

        for(int i=n-1;i>=0;i--){
            int idx = s[i]-'a';

            if(head[curr].children[idx]==-1){
                head.push_back(Node());
                head[curr].children[idx]=head.size()-1;
            }

            curr=head[curr].children[idx];

            if(head[curr].index==-1) head[curr].index=index;
            else if(strs[head[curr].index].size() > s.size()) head[curr].index=index;
        }
    }

    int find(string& s){
        int n = s.size();
        int curr = 0;

        for(int i=n-1;i>=0;i--){
            int idx = s[i]-'a';

            if(head[curr].children[idx]==-1) return head[curr].index;

            curr=head[curr].children[idx];
        }

        return head[curr].index;
    }
};

class Solution {
public:
    vector<int> stringIndices(vector<string>& wordsContainer, vector<string>& wordsQuery) {
        Trie t;

        for(int i=0;i<wordsContainer.size();i++){
            t.add(i, wordsContainer[i], wordsContainer);
        }

        vector<int> res;

        for(string& s : wordsQuery){
            res.push_back(t.find(s));
        }

        return res;
    }
};
