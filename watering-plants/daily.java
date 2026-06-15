
class Solution {
    public ListNode deleteMiddle(ListNode head) {
        if(head==null||head.next==null)return null;
        ListNode slow=head;
        ListNode fast=head;
        ListNode preSlow=null;
        while(fast!=null&&fast.next!=null){
            preSlow=slow;
            slow=slow.next;
            fast=fast.next.next;
            if(slow==fast)break;
        }
        preSlow.next=slow.next;
        return head;
    }
}
