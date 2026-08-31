/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let prev = head,curr = head.next,index = 1

    let first = -1,last =-1,mini = Infinity

    while(curr.next !==null){
        let isCritical = 
        (prev.val < curr.val && curr.val > curr.next.val) || 
        (prev.val > curr.val && curr.val < curr.next.val)


     if(isCritical){
        if(first === -1){
            first = index
        }else{
            mini = Math.min(mini,index - last)
        }
        last =index
     }
     prev = curr
     curr = curr.next
     index++

    }
       if (first === -1 || first === last) {
        return [-1, -1];
    }

    let maxi = last - first;

    return [mini,maxi]
};
