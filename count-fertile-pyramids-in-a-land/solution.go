LeetCode Logo
Problem List
Pending...
Pending...
Debugging...
Debugging...









604

avatar
Avatar
Artur
Access all features with our Premium subscription!
myLists
My Lists
notebook
Notebook
progress
Progress
points
Points
Try New Features
Orders
My Playgrounds
Settings
Appearance
Sign Out
Premium
Description
Description
Editorial
Editorial
Solutions
Solutions
Pending...
Submissions
Submissions
Code


Testcase
Testcase
Test Result
Go
Auto





 {
			nextRow[i-1] += min
			count += nextRow[i-1] - 1
		}
	}
	return count
}

func clearGrid(grid [][]int) {
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] > 1 {
				grid[i][j] = 1
			}
		}
	}
}

func countPyramids(grid [][]int) int {
	count := 0
	for i := len(grid) - 1; i > 0; i-- {
		count += countPyramidsStep(grid[i], grid[i-1])
	}
	clearGrid(grid)
	for i := 0; i < len(grid)-1; i++ {
		count += countPyramidsStep(grid[i], grid[i+1])
	}
	return count
}
2526272829303132333435363738394041424344
Restored from local
Upgrade to Cloud Saving
You must run your code first
All Submissions

Pending...
Artur
Artur
submitted at a few seconds ago
preparing runtime environment
Code
C#
public class Solution {
    public int CountPyramids(int[][] grid) {
        var inv = new int[grid.Length][];
        for (var i = 0; i < inv.Length; i += 1)
        {
            inv[i] = new int[grid[i].Length];
            Array.Copy(grid[i], 0, inv[i], 0, grid[i].Length);
        }
        var deq = new LinkedList<int>();
        for (var i = grid.Length - 1; i > 0; i -= 1)
        {
            for (var j = 0; j < grid[i].Length; j += 1)
            {
                var num = grid[i][j];
                while ((deq.Count > 0) && (grid[i][deq.Last.Value] >= num))
                    deq.RemoveLast();
                deq.AddLast(j);
                while ((deq.Count > 0) && (deq.First.Value <= (j - 3)))
                    deq.RemoveFirst();
                if ((j > 1) && (grid[i - 1][j - 1] > 0))
                    grid[i - 1][j - 1] += grid[i][deq.First.Value];
            }
            deq.Clear();
        }
        for (var i = 0; i < inv.Length - 1; i += 1)
        {
            for (var j = 0; j < inv[i].Length; j += 1)
            {
                var num = inv[i][j];
                while ((deq.Count > 0) && (inv[i][deq.Last.Value] >= num))
                    deq.RemoveLast();
                deq.AddLast(j);
                while ((deq.Count > 0) && (deq.First.Value <= (j - 3)))
                    deq.RemoveFirst();
                if ((j > 1) && (inv[i + 1][j - 1] > 0))
                    inv[i + 1][j - 1] += inv[i][deq.First.Value];
            }
            deq.Clear();
        }
        var count = 0;
        for (var i = 0; i < grid.Length; i += 1)
            for (var j = 0; j < grid[i].Length; j += 1)
                count += Math.Max(0, grid[i][j] - 1);        
        for (var i = 0; i < inv.Length; i += 1)
            for (var j = 0; j < inv[i].Length; j += 1)
                count += Math.Max(0, inv[i][j] - 1);
        return count;
    }
}
View more
 
Search questions


