/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<int> nodesBetweenCriticalPoints(ListNode* head) {
        ListNode*temp=head;
        ListNode*dis=nullptr;
       int minDis=INT_MAX;
        int cnt=0;
         temp=head;
         ListNode*prev=head;
         temp=temp->next;
         int first=-1;
         int previous=-1;
       
         while(temp!=nullptr&&temp->next!=nullptr){
            if((prev->val<temp->val&& temp->next->val<temp->val)||(prev->val>temp->val&& temp->next->val>temp->val)){
                if(first==-1){
                    first=cnt;
                     previous=cnt;
                }
             
                else{
                    minDis=min((cnt-previous),minDis);
                    previous=cnt;
                }
            }
            temp=temp->next;
            prev=prev->next;
            cnt++;
         }
         if(first==previous){
            return {-1,-1};
         }

    int maxDis=(previous-first);
    return {minDis,maxDis};
        
    }
};
