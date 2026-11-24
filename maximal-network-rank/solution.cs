public class Solution {
    public int MaximalNetworkRank(int n, int[][] roads) {
        // Create a dictionary to store the count of roads connected to each city
        Dictionary<int, int> cityRank = new Dictionary<int, int>();
        
        // Initialize the cityRank dictionary
        for (int i = 0; i < n; i++) {
            cityRank[i] = 0;
        }
        
        // Count the roads connected to each city
        foreach (var road in roads) {
            cityRank[road[0]]++;
            cityRank[road[1]]++;
        }
        
        int maxRank = 0;
        
        // Calculate the maximal network rank
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int rank = cityRank[i] + cityRank[j];
                if (Array.Exists(roads, road => (road[0] == i && road[1] == j) || (road[0] == j && road[1] == i))) {
                    rank--; // Deduct 1 if the road is counted twice
                }
                maxRank = Math.Max(maxRank, rank);
            }
        }
        
        return maxRank;
    }
}
