class OrderedStream {
    private $data;
    private $i;
    private $x;

    public function __construct($n) {
        $this->x = $n;
        $this->data = array_fill(0, $n, "");
        $this->i = 1;
    }
    
    public function insert($idKey, $value) {
        $ans = [];
        $this->data[$idKey - 1] = $value;
        if ($idKey == $this->i) {
            for ($j = $this->i - 1; $j < $this->x; ++$j) {
                if (!empty($this->data[$j])) {
                    $ans[] = $this->data[$j];
                    $this->i++;
                } else {
                    break;
                }
            }
        }
        return $ans;
    }
}
