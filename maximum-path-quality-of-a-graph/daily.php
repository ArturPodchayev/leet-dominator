class FreeHeap extends SplMinHeap {
    protected function compare($a, $b): int {
        if ($a[0] !== $b[0]) {
            return $b[0] <=> $a[0];
        }
        return $b[1] <=> $a[1];
    }
}

class BusyHeap extends SplMinHeap {
    protected function compare($a, $b): int {
        if ($a[0] !== $b[0]) {
            return $b[0] <=> $a[0];
        }
        if ($a[1] !== $b[1]) {
            return $b[1] <=> $a[1];
        }
        return $b[2] <=> $a[2];
    }
}

class Solution {

    /**
     * @param Integer[] $servers
     * @param Integer[] $tasks
     * @return Integer[]
     */
    function assignTasks($servers, $tasks) {
        $free = new FreeHeap();
        $busy = new BusyHeap();

        $n = count($servers);

        for ($i = 0; $i < $n; $i++) {
            $free->insert([$servers[$i], $i]);
        }

        $m = count($tasks);
        $ans = [];

        for ($i = 0; $i < $m; $i++) {

            while (!$busy->isEmpty() && $busy->top()[0] <= $i) {
                [$t, $w, $s] = $busy->extract();
                $free->insert([$w, $s]);
            }

            if (!$free->isEmpty()) {
                [$w, $s] = $free->extract();
                $busy->insert([$i + $tasks[$i], $w, $s]);
            } else {
                [$t, $w, $s] = $busy->extract();
                $busy->insert([$t + $tasks[$i], $w, $s]);
            }

            $ans[] = $s;
        }

        return $ans;
    }
}
