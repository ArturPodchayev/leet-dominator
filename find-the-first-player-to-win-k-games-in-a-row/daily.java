class Solution {
    public boolean checkOverlap(int r, int xCenter, int yCenter, int x1, int y1, int x2, int y2) {
        int x = 0, y = 0;
        if(xCenter < x1) x = x1 - xCenter;
        else if (xCenter > x2) x = xCenter - x2;
        if(yCenter < y1) y = y1 - yCenter;
        else if(yCenter > y2) y = yCenter - y2;
        return x * x + y * y <= r * r;
    }
}
