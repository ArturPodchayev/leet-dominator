class BIT {
    public int $n;
    public array $tree;

    public function __construct(int $n) {
        $this->n = $n;
        $this->tree = array_fill(0, $n + 1, 0);
    }

    public static function lowbit(int $x) : int {
        return $x & -$x;
    }

    public function update (int $x, int $v) : void{
        while ($x <= $this->n) {
            $this->tree[$x] ^= $v;
            $x += self::lowbit($x);
        }
    }

    public function query (int $x) : int {
        $ret = 0;
        while ($x) {
            $ret ^= $this->tree[$x];
            $x -= self::lowbit($x);
        }
        return $ret;
    }

    public function updateRange(int $l, int $r, int $v) : void {
        self::update($l, $v);
        self::update($r + 1, $v);
    }
}


class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @param String $s
     * @param String[] $queries
     * @return Boolean[]
     */
    function palindromePath($n, $edges, $s, $queries) {
        $g = array_fill(0, $n, []);

		foreach ($edges as [$u, $v]) {
			$g[$u][] = $v;
			$g[$v][] = $u;
		}

		$bitlen = function($n){
			$n &= 0xFFFFFFFF;
			if ($n === 0) return 32;

			$count = 1;
			if (($n >> 16) === 0) { $count += 16; $n <<= 16; }
			if (($n >> 24) === 0) { $count += 8;  $n <<= 8; }
			if (($n >> 28) === 0) { $count += 4;  $n <<= 4; }
			if (($n >> 30) === 0) { $count += 2;  $n <<= 2; }
			$count -= ($n >> 31);
			return $count;
		};

		$LOG = 32 - $bitlen($n);
		$fa = array_fill(0, $n, array_fill(0, $LOG, 0));
		$dep = array_fill(0, $n, 0);
		$l = array_fill(0, $n, 0);
		$r = array_fill(0, $n, 0);
		$timer = 0;

		$dfs = function (int $u, int $p) use (&$timer, &$dfs, &$l, &$fa, &$dep, &$r, $g) : void{
			$timer += 1;
			$l[$u] = $timer;
			$fa[$u][0] = $p;
			foreach ($g[$u] as $v){
				if ($v == $p){
					continue;
				}
				$dep[$v] = $dep[$u] + 1;
				$dfs($v, $u);
			}
			$r[$u] = $timer;
		};

		$dfs(0, 0);

		for ($j = 1; $j < $LOG; $j++) {
			for ($i = 0; $i < $n; $i++){
				$fa[$i][$j] = $fa[$fa[$i][$j - 1]][$j - 1];
			}
		}

		$lca = function(int $u, int $v) use($dep, $fa, $LOG) : int{
			if ($dep[$u] < $dep[$v]){
				[$u, $v] = [$v, $u];
			}
			$diff = $dep[$u] - $dep[$v];
			for ($i = 0; $i < $LOG; $i++) {
				if (($diff >> $i) & 1) {
					$u = $fa[$u][$i];
				}
			}
			if ($u == $v) return $u;

			for ($i = $LOG - 1; $i > -1; $i--) {
				if ($fa[$u][$i] != $fa[$v][$i]) {
					$u = $fa[$u][$i];
					$v = $fa[$v][$i];
				}
			}
			return $fa[$u][0];
		};

		$bit = new BIT($n + 1);
		$s = str_split($s);
		for ($i = 0; $i < $n; $i++) {
			$bit->updateRange($l[$i], $r[$i], 1 << (ord($s[$i]) - ord("a")));
		}

		$ans = [];
		foreach ($queries as $q) {
			$parts = preg_split('/\\s+/', trim($q));
			$op = $parts[0];
			if ($op === "update") {
				$u = (int)$parts[1];
				$c = $parts[2];
				$oldMask = 1 << (ord($s[$u]) - ord("a"));
				$newMask = 1 << (ord($c) - ord("a"));
				$bit->updateRange($l[$u], $r[$u], $oldMask ^ $newMask);
				$s[$u] = $c;
			} else {
				$u = (int)$parts[1];
				$v = (int)$parts[2];
				$w = $lca($u, $v);
				$mask = $bit->query($l[$u])
					^ $bit->query($l[$v])
					^ (1 << (ord($s[$w]) - ord("a")));
				$ans[] = ($mask & ($mask - 1)) === 0;
			}
		}

		return $ans;
    }
}
