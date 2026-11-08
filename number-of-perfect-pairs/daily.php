class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function countServers($grid) {
        $rowLength = count($grid);
        $colLength = count($grid[0]);
        $rowCount = array_fill(0, $rowLength, 0);
        $colCount = array_fill(0, $colLength, 0);
        $servers = 0;
        
        for ($i = 0; $i < $rowLength; $i++) {
            for ($j = 0; $j < $colLength; $j++) {
                if ($grid[$i][$j] === 1) {
                    $rowCount[$i]++;
                    $colCount[$j]++;
                }
            }
        }
        
        for ($i = 0; $i < $rowLength; $i++) {
            for ($j = 0; $j < $colLength; $j++) {
                if ($grid[$i][$j] == 1 && ($rowCount[$i] > 1 || $colCount[$j] > 1)) {
                    $servers++;
                }
            }
        }        
        return $servers;        
    }
}
