class ProductOfNumbers
    {
        public int $num = 0;

        public array $products = [];

        public int $lastZeroIndex = 0;

        /**
         * @var array<int>
         */
        public array $nums;

        /**
         * @param Integer $num
         * @return NULL
         */
        public function add(int $num): null
        {
            if ($num == 0) {
                $this->nums = [0];
                $this->lastZeroIndex = $this->num;
            } else {
                $this->nums[] = $num;
            }

            $this->num++;

            return null;
        }

        /**
         * @param Integer $k
         * @return Integer
         */
        public function getProduct(int $k): int
        {
            if ($this->lastZeroIndex != 0 && $this->num - $k <= $this->lastZeroIndex) {
                return 0;
            }

            $cacheVal = $this->products[$this->calcCache($k)] ?? null;

            if (!is_null($cacheVal)) {
                return $cacheVal;
            }

            $offset = $this->num - $k - $this->lastZeroIndex;

            $res = array_reduce(array_slice($this->nums, $offset, $k), fn (int $item, int $k) => $item * $k, 1);
            $this->cacheTheProduct($k, $res);

            return $res;
        }

        private function calcCache(int $num): string
        {
            return $this->num * ($num + 10000);
        }

        private function cacheTheProduct(int $num, int $value): void
        {
            $this->products[$this->calcCache($num)] = $value;
        }
    }
