# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import math

class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        fc = pc = lc = -1
        pos = 1
        md = math.inf

        temp = head

        while temp.next.next:
            if (temp.next.val < temp.val and temp.next.val < temp.next.next.val) or (temp.next.val > temp.val and temp.next.val > temp.next.next.val):
                if fc == -1:
                    fc = lc = pos
                else:
                    pc = lc
                    lc = pos
                    md = min(md, lc - pc)

                
            pos += 1
            temp = temp.next

        if fc == -1 or lc == fc:
            return [-1, -1]
        
        return [md, lc - fc]
                



        
