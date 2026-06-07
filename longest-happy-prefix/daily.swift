class Solution {
  func createBinaryTree(_ d: [[Int]], _ rootId:Int? = nil, _ depth:Int = 0) -> TreeNode? {
    rootId == nil ?
      (depth > 0 ? nil
      : createBinaryTree(d,Set(d.map{$0[0]}).subtracting(d.map{$0[1]}).first!))
    : TreeNode(
        rootId!, 
        createBinaryTree(d,d.first{$0[0]==rootId! && $0[2]==1}?[1],depth+1), 
        createBinaryTree(d,d.first{$0[0]==rootId! && $0[2]==0}?[1],depth+1)
    )
  }
}
