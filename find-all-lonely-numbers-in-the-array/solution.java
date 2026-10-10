import java.util.*;
class Solution {
    public List<Integer> findLonely(int[] nums) {

        ArrayList<Integer> list = new ArrayList<>();

        for(int n : nums)
        {
            list.add(n);
        }
      
       Collections.sort(list);
        ArrayList<Integer> lonelyNum = new ArrayList<>();

         if (list.size() == 1) {
            lonelyNum.add(list.get(0));
        }

        for (int i = 1; i < list.size() - 1; i++) {
            if (list.get(i + 1) > (list.get(i) + 1) && (list.get(i - 1) + 1) < list.get(i)) {
                lonelyNum.add(list.get(i));
            }
        }

        if (list.size() > 1) {
            if (list.get(0) + 1 < list.get(1)) {
                lonelyNum.add(list.get(0));
            }
            if ((list.get(list.size() - 1) - 1) > list.get(list.size() - 2)) {
                lonelyNum.add(list.get(list.size() - 1));
            }
        }

        return lonelyNum;
          }
}
