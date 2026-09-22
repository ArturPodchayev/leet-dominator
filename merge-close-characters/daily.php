$pre;
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @param Integer[][] $queries
     * @return Integer[]
     */

    function resultArray($nums, $k, $queries) {
        $n = count($nums);
		$seg = new SegmentTree($nums, $k);

		$ans = [];
		foreach ($queries as [$index, $value, $start, $x]) {
			$seg->update(1, 0, $n - 1, $index, $value);
			$pre = $seg->query(1, 0, $n - 1, $start, $n - 1);
			$ans[] = $pre[$x];
		}

		return $ans;        
    }
}

class SegmentTree {
    public array $tree;
    public int $k;

    public function __construct ($nums, $k) {
        $this->k = $k;
        $n = count($nums);
        $size = 2 << ($n === 0 ? 0 : floor(log(abs($n), 2)) + 1);
        $this->tree = array_fill(0, $size, array_fill(0, $k + 1, 0));

        self::build($nums, 1, 0, $n - 1);
    }

    public function build($nums, $o, $l, $r) {
        if ($l == $r) {
            self::makeLeaf($o, $nums[$l]);
            return;
        }

        $m = intdiv($l + $r, 2);
        self::build($nums, $o * 2, $l, $m);
        self::build($nums, $o * 2 + 1, $m + 1, $r);
        self::maintain($o);
    }

    public function makeLeaf($o, $value) {
        $info = array_fill(0, $this->k + 1, 0);
        $r = $value % $this->k;
        $info[$r] = 1;
        $info[$this->k] = $r;  
        $this->tree[$o] = $info;
    }

    public function maintain($o) {
        $this->tree[$o] = $this->mergePre(
            $this->tree[$o * 2],
            $this->tree[$o * 2 + 1]
        );
    }

    public function mergePre($left, $right) {
        global $pre;

        $pre = array_fill(0, $this->k + 1, 9);

        $mul_L = $left[$this->k];
        $mul_R = $right[$this->k];

        $pre[$this->k] = ($mul_L * $mul_R) % $this->k;

        for ($x = 0; $x < $this->k; $x++) {
            $pre[$x] = $left[$x];
        }

        for ($x = 0; $x < $this->k; $x++) {
            $pre[($mul_L * $x) % $this->k] += $right[$x];
        }

        return $pre;
    }

    public function update($o, $l, $r, $index, $value) {
        if ($l == $r){
            self::makeLeaf($o, $value);
            return;
        }

        $m = intdiv(($l + $r), 2);
        if ($index <= $m) {
            self::update($o * 2, $l, $m, $index, $value);
        }
        else {
            self::update($o * 2 + 1, $m + 1, $r, $index, $value);
        }

        self::maintain($o);
    }

    public function query($o, $l, $r, $L, $R) {
        if ($L <= $l && $r <= $R) {
            return $this->tree[$o];
        }

        $m = intdiv(($l + $r), 2);

        if ($R <= $m) {
            return self::query($o * 2, $l, $m, $L, $R);
        }

        if ($L > $m) {
            return self::query($o * 2 + 1, $m + 1, $r, $L, $R);
        }

        $left = self::query($o * 2, $l, $m, $L, $R);
        $right = self::query($o * 2 + 1, $m + 1, $r, $L, $R);

        return self::mergePre($left, $right);
    }
}
