class Solution {
    class RowInfo {
        int row;
        boolean left;
        boolean middle;
        boolean right;
        
        public RowInfo(int row) {
            this.row = row;
            left = true;
            middle = true;
            right = true;
        }
    }
    
    public int maxNumberOfFamilies(int n, int[][] reservedSeats) {
        Map<Integer, RowInfo> infos = new HashMap<>();
        for (int[] reservedSeat : reservedSeats) {
            int row = reservedSeat[0];
            int col = reservedSeat[1];
            infos.putIfAbsent(row, new RowInfo(row));
            if (col >= 2 && col <= 5) {
                infos.get(row).left = false;
            } 
            if (col >= 4 && col <= 7) {
                infos.get(row).middle = false;
            } 
            if (col >= 6 && col <= 9) {
                infos.get(row).right = false;
            }
        }
        int result = 0;
        for (Integer row : infos.keySet()) {
            RowInfo info = infos.get(row);
            result += Math.max((info.left ? 1 : 0) + (info.right ? 1 : 0), info.middle ? 1 : 0);
        }
        result += (n - infos.size()) * 2;
        return result;
    }
}
