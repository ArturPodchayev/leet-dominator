using System;
using System.Collections.Generic;

public class Solution
{
    private record Point(int node, int edgeCost) { }
    private record Step(int node, int minEdgeCostFromStart, long sumCostFromStart) { }

    private static readonly int NO_PATH_FOUND = -1;
    private static readonly int START_NODE = 0;
    private static readonly int POSITIVE_INFINITY = int.MaxValue;
    private static readonly int MAX_COST = (int)Math.Pow(10, 9);

    private int numberOfNodes;
    private List<Point>[] directedGraph;

    public int FindMaxPathScore(int[][] edges, bool[] online, long maxSumCost)
    {
        if (edges.Length == 0)
        {
            return NO_PATH_FOUND;
        }
        numberOfNodes = online.Length;
        directedGraph = CreateDirectedGraph(edges);
        return SearchForMaxPathScore(online, maxSumCost);
    }

    private int SearchForMaxPathScore(bool[] online, long maxSumCost)
    {
        int lowerEdgeCost = 0;
        int upperEdgeCost = MAX_COST;
        int maxPathScore = NO_PATH_FOUND;

        while (lowerEdgeCost <= upperEdgeCost)
        {
            int minTargetEdgeCost = lowerEdgeCost + (upperEdgeCost - lowerEdgeCost) / 2;
            int edgeCost = FindPathWithScoreNotLessThanMinTargetEdgeCost(minTargetEdgeCost, maxSumCost, online);

            if (edgeCost != NO_PATH_FOUND)
            {
                maxPathScore = Math.Max(maxPathScore, edgeCost);
                lowerEdgeCost = minTargetEdgeCost + 1;
            }
            else
            {
                upperEdgeCost = minTargetEdgeCost - 1;
            }
        }
        return maxPathScore;
    }

    private int FindPathWithScoreNotLessThanMinTargetEdgeCost(int minTargetEdgeCost, long maxSumCost, bool[] online)
    {
        PriorityQueue<Step, int> minHeapForEdgeCost = new PriorityQueue<Step, int>(Comparer<int>.Default);
        minHeapForEdgeCost.Enqueue(new Step(START_NODE, POSITIVE_INFINITY, 0), 0);

        int[] minEdgeCost = new int[numberOfNodes];
        Array.Fill(minEdgeCost, POSITIVE_INFINITY);
        minEdgeCost[START_NODE] = 0;

        while (minHeapForEdgeCost.Count > 0)
        {
            Step current = minHeapForEdgeCost.Dequeue();
            if (current.node == numberOfNodes - 1)
            {
                return current.minEdgeCostFromStart;
            }
            if (directedGraph[current.node].Count == 0)
            {
                continue;
            }

            foreach (Point next in directedGraph[current.node])
            {
                if (!online[next.node]
                        || next.edgeCost < minTargetEdgeCost
                        || minEdgeCost[next.node] < next.edgeCost)
                {
                    continue;
                }

                if (current.sumCostFromStart + next.edgeCost > maxSumCost)
                {
                    break;
                }
                minEdgeCost[next.node] = next.edgeCost;
                int minEdgeCostFromStart = Math.Min(next.edgeCost, current.minEdgeCostFromStart);
                minHeapForEdgeCost.Enqueue(new Step(next.node, 
                                           minEdgeCostFromStart, 
                                           (current.sumCostFromStart + next.edgeCost)),
                                           minEdgeCostFromStart);
            }
        }
        return NO_PATH_FOUND;
    }

    private List<Point>[] CreateDirectedGraph(int[][] edges)
    {
        List<Point>[] graph = new List<Point>[numberOfNodes];
        for (int node = 0; node < numberOfNodes; ++node)
        {
            graph[node] = new List<Point>();
        }

        foreach (int[] edge in edges)
        {
            int from = edge[0];
            int to = edge[1];
            int cost = edge[2];
            graph[from].Add(new Point(to, cost));
        }

        /*
        The sorting is needed so that the search is stopped when the cost of the current edge 
        makes the total cost from start greater than the given limit(maxSumCost). 
         */
        for (int node = 0; node < numberOfNodes; ++node)
        {
            if (graph[node].Count > 0)
            {
                graph[node].Sort((x, y) => x.edgeCost - y.edgeCost);
            }
        }
        return graph;
    }
}
