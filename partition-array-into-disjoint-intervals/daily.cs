/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public int[] NodesBetweenCriticalPoints(ListNode head) {
        List<int> ids = new();
        ListNode cur = head.next;
        int pre = head.val;
        if(head == null || cur == null || cur.next == null)
            return [-1, -1];

        int cnt = 1, minDist = int.MaxValue;
        while(cur != null && cur.next != null)
        {
            int curV = cur.val, nextV = cur.next.val;
            if(curV < pre && curV < nextV || curV > pre && curV > nextV)
                ids.Add(cnt);

            cur = cur.next;
            pre = curV;
            cnt++;

            if(ids.Count > 1)
                minDist = Math.Min(minDist, cnt-1 - ids[ids.Count-2]);
        }

        if(ids.Count < 2)
            return [-1, -1];

        int maxDist = ids.Last() - ids.First();
        return [minDist, maxDist];
    }
}
