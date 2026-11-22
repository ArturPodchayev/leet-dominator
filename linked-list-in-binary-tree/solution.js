/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const dfs = (head, root) => {
    if (!head) return true;
    if (!root) return false;
    if (head.val !== root.val) return false;
    return dfs(head.next, root.left) || dfs(head.next, root.right);
}
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    if (!root) return false;
    return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
};
