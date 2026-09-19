 class Solution {
    function checkOverlap($radius, $xCenter, $yCenter, $x1, $y1, $x2, $y2) {
        $nearestX = max($x1, min($xCenter, $x2));
        $nearestY = max($y1, min($yCenter, $y2));
        
        $dx = $nearestX - $xCenter;
        $dy = $nearestY - $yCenter;
        
        return $dx * $dx + $dy * $dy <= $radius * $radius;
    }
}
