class Solution
{
	/**
	 * @param string $word
	 * @return integer
	 */
	function minimumPushes(string $word): int
	{
		$length = strlen($word);

		if ($length <= 8) {
			return $length;
		}

		if ($length <= 16) {
			return 8 + 2 * ($length - 8);
		}

		if ($length <= 24) {
			return 8 + 2 * 8 + 3 * ($length - 16);
		}

		return 8 + 2 * 8 + 3 * 8 + 4 * ($length - 24);
	}

	/**
	 * @param string $word
	 * @return integer
	 */
	function minimumPushes2(string $word): int
	{
		$result = 0;
		$length = iconv_strlen($word);

		for ($i = 0; $i < $length; $i++) {
			$result += (int) (($i / 8) + 1);
		}

		return $result;
	}
}
