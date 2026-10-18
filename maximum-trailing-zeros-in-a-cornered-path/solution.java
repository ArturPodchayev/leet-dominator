class Solution {
    class Point {
        int powerOfTwo;
        int powerOfFive;
        
         public Point() {
            powerOfTwo = 0;
            powerOfFive = 0;
        }

        public Point(int num) {
            powerOfTwo = 0;
            powerOfFive = 0;
            
            while(num%2 == 0) {
                powerOfTwo++;
                num /= 2;
            }
            
            while(num%5 == 0) {
                powerOfFive++;
                num /= 5;
            }
        }
        
        private Point add(Point point) {
            powerOfTwo += point.powerOfTwo;
            powerOfFive += point.powerOfFive;
            return this;
        }
        
                
        private Point subtract(Point point) {
            powerOfTwo -= point.powerOfTwo;
            powerOfFive -= point.powerOfFive;
            return this;
        }
        
        
        private int getNumberOfZeros() {
            return Math.min(powerOfTwo, powerOfFive);
        }
    }
    
    public int maxTrailingZeros(int[][] grid) {
        // Keeps track of power of 2 & 5 per entry in grid
        Point[][] values = new Point[grid.length][grid[0].length];
        
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                values[i][j] = new Point(grid[i][j]);
            }
        }
        
        // Keeps track of power of 2 & 5 per entry in grid per row
        // calcH[i][j] => value for row i, col 0 to j
        Point[][] calcH = new Point[grid.length][grid[0].length];
        for(int i = 0;   i < grid.length; i++) {
            calcH[i][0] = values[i][0];
            for(int j = 1; j < grid[0].length; j++) {
                calcH[i][j] = new Point().add(calcH[i][j-1]).add(values[i][j]);
            }
        }
        
        // Keeps track of power of 2 & 5 per entry in grid per col
        Point[][] calcV = new Point[grid.length][grid[0].length];
        
        for(int j = 0;   j < grid[0].length; j++) {
            calcV[0][j] = values[0][j];
            for(int i = 1; i < grid.length; i++) {
                calcV[i][j] = new Point().add(calcV[i-1][j]).add(values[i][j]);
            }
        }
        
        int ans = 0;
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                // _| => Vertical till i,j And then Horizontal till i,j
                ans = Math.max(ans, new Point().add(calcH[i][j])
                               .add(calcV[i][j])
                               .subtract(values[i][j]) // this has been added twice
                               .getNumberOfZeros());
                // |_ => Vertical till i,j And then Horizontal beyond i,j
                ans = Math.max(ans, new Point().add(calcH[i][grid[0].length-1])
                               .subtract(calcH[i][j])
                               .add(calcV[i][j])
                               .getNumberOfZeros());
                //   _  Horizontal till i,j And and then vertical below i,j
                //    |
                ans = Math.max(ans, new Point().add(calcH[i][j])
                               .add(calcV[grid.length-1][j])
                               .subtract(calcV[i][j])
                               .getNumberOfZeros());                           
                //     _  Horizontal beyond i,j And vertical below i,j
                //    |
                ans = Math.max(ans, new Point().add(calcH[i][grid[0].length-1])
                               .subtract(calcH[i][j])
                               .add(calcV[grid.length-1][j])
                               .subtract(calcV[i][j])
                               .add(values[i][j])
                               .getNumberOfZeros());  

            }
        }
        
        
        return ans;
    }
   
}
