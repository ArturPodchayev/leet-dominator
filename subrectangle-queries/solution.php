class SubrectangleQueries {
    private $rectangle;
    
    public function __construct($rectangle) {
        $this->rectangle = $rectangle;
    }
    
    public function updateSubrectangle($row1, $col1, $row2, $col2, $newValue) {
        for ($i = $row1; $i <= $row2; $i++) {
            for ($j = $col1; $j <= $col2; $j++) {
                $this->rectangle[$i][$j] = $newValue;
            }
        }
    }
    
    public function getValue($row, $col) {
        return $this->rectangle[$row][$col];
    }
}
