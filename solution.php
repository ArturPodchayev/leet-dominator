class Solution
{

  /**
   * @param String $s
   *
   * @return String
   */
    public function reformat($s)
    {
        $nums = preg_replace('/[^0-9]/', '', $s);
        $chars = preg_replace('/[^a-zA-Z]/', '', $s);
        $num_count = strlen($nums);
        $char_count = strlen($chars);

        $ans = '';
        if (!(abs($num_count - $char_count) <= 1)) {
            return $ans;
        }

        if ($num_count > $char_count) {
            for ($i=0; $i < $num_count; $i++) {
                $ans .= $nums[$i] . $chars[$i];
            }
        } else {
            for ($i=0; $i < $char_count; $i++) {
                $ans .= $chars[$i] . $nums[$i];
            }
        }
        return $ans;

    }
}
