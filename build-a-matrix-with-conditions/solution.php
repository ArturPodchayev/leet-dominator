class Solution {
    function khan($k, $Conditions) {
        $graph = array_fill(0, $k + 1, []);
        $degree = array_fill(0, $k + 1, 0);
        
        foreach ($Conditions as $condition) {
            $graph[$condition[0]][] = $condition[1];
            $degree[$condition[1]]++;
        }
        
        $q = new SplQueue();
        for ($i = 1; $i <= $k; $i++) {
            if ($degree[$i] == 0) {
                $q->enqueue($i);
            }
        }
        
        $ans = [];
        while (!$q->isEmpty()) {
            $t = $q->dequeue();
            $ans[] = $t;
            foreach ($graph[$t] as $i) {
                $degree[$i]--;
                if ($degree[$i] == 0) {
                    $q->enqueue($i);
                }
            }
        }
        
        return $ans;
    }

    function buildMatrix($k, $rowConditions, $colConditions) {
        $row = $this->khan($k, $rowConditions);
        $col = $this->khan($k, $colConditions);
        
        if (count($row) < $k || count($col) < $k) {
            return [];
        }
        
        $mp = [];
        for ($i = 0; $i < $k; $i++) {
            $mp[$col[$i]] = $i;
        }
        
        $ans = array_fill(0, $k, array_fill(0, $k, 0));
        for ($i = 0; $i < $k; $i++) {
            $col_pos = $mp[$row[$i]];
            $ans[$i][$col_pos] = $row[$i];
        }
        
        return $ans;
    }
}
