class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        boxes_length = len(boxes)
        leftarr = []

        def fillLeftArr(i, n_balls, n_opers):
            if i == boxes_length: return
            leftarr.append(n_balls + n_opers)

            if boxes[i] == '0':
                fillLeftArr(i+1, n_balls, n_opers + n_balls)
            else:
                fillLeftArr(i+1, n_balls + 1, n_opers + n_balls)
        
        def fillRightArr(i, n_balls, n_opers):
            if i == -1: return
            leftarr[i] += (n_balls + n_opers)

            if boxes[i] == '0':
                fillRightArr(i-1, n_balls, n_opers + n_balls)
            else:
                fillRightArr(i-1, n_balls + 1, n_opers + n_balls)
        
        fillLeftArr(0, 0, 0)
        fillRightArr(boxes_length - 1, 0, 0)

        return leftarr
