class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        Map<Integer, Integer> indexCounts = new HashMap<>();

        int index = 0;
        for (int outher[] : mat) {
            boolean isNotSoldersYet = true;
            for (int inner : outher) {
                if (inner == 1) {
                    indexCounts.put(index, indexCounts.getOrDefault(index, 0) + 1);
                    isNotSoldersYet = false;
                }
            }

            if (isNotSoldersYet) {
                indexCounts.put(index, 0);
            }

            index++;
        }

        List<Integer> ceilList = new ArrayList<>();

        for (int ind : indexCounts.keySet()) {
            int numOfSoldats = indexCounts.get(ind);
            ceilList.add(numOfSoldats);
        }

        List<Integer> copyOfList = new ArrayList<>(ceilList);

        Collections.sort(ceilList);

        int[] res = new int[k];
        int pointer = 0;
        for (int num : ceilList) {
            if (pointer == res.length)
                break;

            int innerIndex = 0;
            for (int numFormIndex : copyOfList) {
                if (numFormIndex == num) {
                    res[pointer] = innerIndex;
                    copyOfList.set(innerIndex, -1);
                    break;
                }

                innerIndex++;
            }

            pointer++;
        }

        return res;
    }
}
