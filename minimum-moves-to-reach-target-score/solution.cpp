class Solution {
public:
    int minMoves(int target, int maxDoubles) {
        int count = 0;

        while (target > 1) {
            if (target % 2 == 0 && maxDoubles) {
                target /= 2;
                ++count;
                --maxDoubles;
            } else {
                if (maxDoubles == 0) {
                    count += (target - 1);
                    break;
                }
                ++count;
                --target;
            }
        }



        return count;
    }
};
