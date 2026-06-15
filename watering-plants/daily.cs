public class Solution {
    public ListNode DeleteMiddle(ListNode head) {
        if(head.next == null) {return head.next;}
        ListNode f = head, d = head; 
        while(d.next != null && d.next.next != null && d.next.next.next != null) {
            d = d.next.next; 
            f = f.next;
        }
        f.next = f.next.next; 
        return head;
    }
}
