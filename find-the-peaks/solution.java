class Solution {
    public List<Integer> findPeaks(int[] mountain) {
        List<Integer> rez = new ArrayList<>();

        for (int i = 1; i < mountain.length - 1; i++) {

            int num = mountain[i];

            if (num > mountain[i - 1] && num > mountain[i + 1]) {
                rez.add(i);
                i++;
            }
        }

        return rez;
    }
}
