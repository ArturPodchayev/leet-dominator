import java.util.*;
import java.util.regex.*;
import java.util.stream.*;

class Solution {
    private int[] zeroStart;
    private int[] zeroEnd;
    private int[] valleyValue;
    private int zeroBlockCount;
    private List<int[]> sparseTable;

    public List<Integer> maxActiveSectionsAfterTrade(String s, int[][] queries) {
        int activeCount = (int) s.chars().filter(ch -> ch == '1').count();

        List<Integer> startList = new ArrayList<>();
        List<Integer> endList = new ArrayList<>();

        Matcher matcher = Pattern.compile("0+").matcher(s);
        while (matcher.find()) {
            startList.add(matcher.start());
            endList.add(matcher.end() - 1);
        }

        zeroStart = startList.stream().mapToInt(Integer::intValue).toArray();
        zeroEnd = endList.stream().mapToInt(Integer::intValue).toArray();
        zeroBlockCount = zeroStart.length;

        valleyValue = IntStream.range(0, zeroBlockCount - 1)
                .map(i -> (zeroEnd[i] - zeroStart[i] + 1)
                        + (zeroEnd[i + 1] - zeroStart[i + 1] + 1))
                .toArray();

        int valleyCount = valleyValue.length;
        sparseTable = new ArrayList<>();
        sparseTable.add(valleyValue);

        for (int jump = 1; jump * 2 <= valleyCount; jump *= 2) {
            int[] previous = sparseTable.get(sparseTable.size() - 1);
            int[] current = new int[previous.length - jump];

            for (int i = 0; i < current.length; i++) {
                current[i] = Math.max(previous[i], previous[i + jump]);
            }

            sparseTable.add(current);
        }

        List<Integer> answer = new ArrayList<>(queries.length);

        for (int[] query : queries) {
            answer.add(activeCount + getMaximumGain(query[0], query[1]));
        }

        return answer;
    }

    private int rangeMaximum(int left, int right) {
        int level = 31 - Integer.numberOfLeadingZeros(right - left + 1);
        return Math.max(
                sparseTable.get(level)[left],
                sparseTable.get(level)[right - (1 << level) + 1]
        );
    }

    private int clippedGain(int valleyIndex, int left, int right) {
        return valleyValue[valleyIndex]
                - Math.max(0, left - zeroStart[valleyIndex])
                - Math.max(0, zeroEnd[valleyIndex + 1] - right);
    }

    private int getMaximumGain(int left, int right) {
        if (zeroBlockCount < 2) {
            return 0;
        }

        int firstValley = lowerBound(zeroEnd, left);
        int lastValley = upperBound(zeroStart, right) - 2;

        if (firstValley > lastValley) {
            return 0;
        }

        int boundaryBest = Math.max(
                clippedGain(firstValley, left, right),
                clippedGain(lastValley, left, right)
        );

        int middleBest = 0;
        if (lastValley - firstValley >= 2) {
            middleBest = rangeMaximum(firstValley + 1, lastValley - 1);
        }

        return Math.max(boundaryBest, middleBest);
    }

    private static int lowerBound(int[] array, int target) {
        int left = 0;
        int right = array.length;

        while (left < right) {
            int mid = (left + right) >>> 1;

            if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    private static int upperBound(int[] array, int target) {
        int left = 0;
        int right = array.length;

        while (left < right) {
            int mid = (left + right) >>> 1;

            if (array[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}
