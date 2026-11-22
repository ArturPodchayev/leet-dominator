class Solution:
    def isSubPath(self, head: Optional[ListNode], root: Optional[TreeNode]) -> bool:

        def match(node,head):
            if not head:
                return True
            if not node:
                return False

            if node.val != head.val:
                return False
            
            return match(node.left,head.next) or match(node.right,head.next)

        def dfs(node):
            if not node:
                return False
            if match(node,head):
                return True
            
            return dfs(node.left) or dfs(node.right)

        return dfs(root)
