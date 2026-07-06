class Solution {
    public int removeCoveredIntervals(int[][] intervals) {

        int totalCount = 0;

        // Sort by start ascending.
        // If start points are equal, sort by end descending.
        Arrays.sort(intervals,
                (a, b) -> (a[0] == b[0])
                        ? b[1] - a[1]
                        : a[0] - b[0]);

        for (int i = 0; i < intervals.length; i++) {

            int[] interval = intervals[i];

            // Skip already covered intervals.
            if (interval[0] != Integer.MAX_VALUE) {

                totalCount++;

                // Check subsequent intervals that may be covered.
                for (int j = i + 1;
                     j < intervals.length &&
                     (intervals[j][0] <= interval[1] ||
                      intervals[j][0] == Integer.MAX_VALUE);
                     j++) {

                    // Current interval completely covers interval j.
                    if (intervals[j][1] <= interval[1]) {

                        // Mark as covered.
                        intervals[j][0] = Integer.MAX_VALUE;
                    }
                }
            }
        }

        return totalCount;
    }
}
