
Problem List






682

avatar
Avatar
Artur
Access all features with our Premium subscription!
myLists
My Lists
favorites
Favorites
notebook
Notebook
progress
Progress
points
Points
Try New Features
Orders
My Playgrounds
Settings
Appearance
Sign Out
Premium
Description
Description
Editorial
Editorial
Solutions
Accepted
Accepted
Submissions
Submissions
Code
Test Result
Test Result


Testcase
All Solutions


Boring 🫩

Anshu Ayush
50 Days Badge 2026
1
Sep 11, 2026
C++
Intuition
Approach
Complexity
Time complexity:
Space complexity:
Code
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
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

    bool solve(ListNode* head, TreeNode* root){
        if(root == NULL && head == NULL)return true;
        if(head == NULL)return true;
        if(root == NULL)return false;
        

        if(head->val != root->val)return false;

        bool k  = solve(head->next, root->left);
        if(k)return true;
        k = solve(head->next, root->right);
        if(k)return true;
        return false;
    }

    bool solve1(TreeNode* root, ListNode* head){
        if(root == NULL)return false;

        if(root->val ==  head->val){
            bool k = solve(head, root);
            if(k)return true;
        }
        bool k = solve1(root->left, head);
        if(k)return true;
        k = solve1(root->right, head); if(k)return true;
        return false;

    }
    bool isSubPath(ListNode* head, TreeNode* root) {
        return solve1(root, head);

    }
};
 

Next
Linked List in Binary Tree
Comments (0)

Sort by:Best
Type comment here...

Comment
No comments yet.

0


0


C++
Auto





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
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullp
23456789101112131415161718192021222324
Saved
Case 1
Case 2
Case 3

head =
[4,2,8]
root =
[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
1
4
4
2
2
1
6
8
1
3
Search questions


