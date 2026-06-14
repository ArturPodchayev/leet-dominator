func pairSum(head *ListNode) int {
	slow, fast := head, head.Next
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	l1 := head
	l2 := slow.Next
	slow.Next = nil

	var l2Rev *ListNode
	curr := l2
	for curr != nil {
		t := curr.Next
		curr.Next = l2Rev
		l2Rev = curr
		curr = t
	}

	res := -1
	for l2Rev != nil && l1 != nil {
		res = max(res, l2Rev.Val+l1.Val)
		l2Rev = l2Rev.Next
		l1 = l1.Next
	}

	return res
}
