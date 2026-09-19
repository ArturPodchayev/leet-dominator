public class Solution {
    public bool CheckOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2) {
         // Step 1: Find closest point to circle center
        int closestX = Math.Max(x1, Math.Min(xCenter, x2));
        int closestY = Math.Max(y1, Math.Min(yCenter, y2));
         
         // Step 2: Compute squared distance
        int dx = xCenter - closestX;
        int dy = yCenter - closestY;
        int distSq = dx * dx + dy * dy;

        // Step 3: Compare with r^2
        return distSq <= radius * radius;
    }
}
