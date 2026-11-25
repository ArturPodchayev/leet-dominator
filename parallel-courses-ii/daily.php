class Solution {
    private int $mod = 1000000007;

    private function binpow(int $a, int $b): int {
        $ret = 1;
        $a %= $this->mod;
        while ($b > 0) {
            if ($b & 1) {
                $ret = ($ret * $a) % $this->mod;
            }
            $a = ($a * $a) % $this->mod;
            $b >>= 1;
        }
        return $ret;
    }

    private function computeHash(array $v, int $i, int $j, int $base): int {
        $p = 1;
        $ret = 0;
        for ($x = $i; $x <= $j; $x++) {
            $ret = ($ret + ($v[$x] * $p) % $this->mod) % $this->mod;
            $p = ($p * $base) % $this->mod;
        }
        return $ret;
    }

    private function check(array $v, int $m): bool {
        $mp = [];
        $base = 13;
        $x = $this->computeHash($v, 0, $m - 1, $base);
        $p = $this->binpow($base, $m - 1);
        $inv = $this->binpow($base, $this->mod - 2);

        $mp[$x] = ($mp[$x] ?? 0) + 1;

        $n = count($v);
        for ($i = 0, $j = $m; $j < $n; $i++, $j++) {
            $x = (($x - $v[$i]) % $this->mod + $this->mod) % $this->mod;
            $x = ($x * $inv) % $this->mod;
            $x = ($x + ($v[$j] * $p) % $this->mod) % $this->mod;
            $mp[$x] = ($mp[$x] ?? 0) + 1;
        }

        foreach ($mp as $count) {
            if ($count === 1) return true;
        }
        return false;
    }

    function smallestUniqueSubarray(array $nums): int {
        $low = 1;
        $high = count($nums);
        $ans = $high;

        while ($low <= $high) {
            $mid = intdiv($low + $high, 2);
            if ($this->check($nums, $mid)) {
                $ans = $mid;
                $high = $mid - 1;
            } else {
                $low = $mid + 1;
            }
        }
        return $ans;
    }
}
