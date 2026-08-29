using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int[] LexicographicallySmallestArray(int[] nums, int limit) {
        int n = nums.Length;

        var sortedEnum = nums
            .Select((num, i) => (num, i))
            .OrderBy(x => x.num)
            .ToList();

        var newPositions = new List<int>();
        var currPositions = new List<int>();
        int prev = int.MinValue;

        foreach (var (num, idx) in sortedEnum) {
            if (num > prev + limit) {
                currPositions.Sort();
                newPositions.AddRange(currPositions);
                currPositions.Clear();
                currPositions.Add(idx);
            } else {
                currPositions.Add(idx);
            }
            prev = num;
        }

        currPositions.Sort();
        newPositions.AddRange(currPositions);

        var res = new int[n];
        for (int i = 0; i < n; i++) {
            res[newPositions[i]] = sortedEnum[i].num;
        }

        return res;
    }
}
