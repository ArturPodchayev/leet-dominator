class Solution {
    public int minArrivalsToDiscard(int[] arrivals, int w, int m) {
        int res = 0;
        Map<Integer, Integer> countMap = new HashMap<>();
        countMap.put(0, 0);
        for (int i = 0; i < arrivals.length; i ++) {
            // Cleanup the countMap: count - 1 for number at index of (i - w)
            if (i >= w && arrivals[i - w] != 0) {
                countMap.put(arrivals[i - w], countMap.get(arrivals[i - w]) - 1);
            }
            // Logic for adding count for current arrival
            int num = arrivals[i];
            if (!countMap.containsKey(num)) {
                countMap.put(num, 1);
            } else {
                if (countMap.get(num) == m) {
                    arrivals[i] = 0;
                    res ++;
                } else {
                    countMap.put(num, countMap.get(num) + 1);
                }
            }
        }
        return res;
    }
}
