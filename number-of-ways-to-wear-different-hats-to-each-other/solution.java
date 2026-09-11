      class Recursive {
        public int numberWays(List<List<Integer>> hats) {
            int n = hats.size();
            Integer[][] dp = new Integer[41][1 << 10]; // {Pair(cap, mask of selected person), ways}
            //create adj matrix for cap to people distribution
            List<Integer>[] hattToP = new List[41];
            for (int i = 1; i <= 40; i++) hattToP[i] = new ArrayList<>();

            for (int i = 0; i < n; i++) {
                for (int h : hats.get(i)) {
                    hattToP[h].add(i);
                }
            }
            return dfs((1 << n) - 1, 0, 1, hattToP, dp); // start with 1st hat and traverse through all
        }

        private int dfs(int allMask,
                        int assignedPeople,
                        int hat,
                        List<Integer>[] hattToP,
                        Integer[][] dp) {

            if (assignedPeople == allMask) return 1;
            if (hat > 40) return 0; // person can't wear hat > 40 number

            if (dp[hat][assignedPeople] != null) return dp[hat][assignedPeople];
            int ways = dfs(allMask, assignedPeople, hat + 1, hattToP, dp); // skip the hat

            for (Integer p : hattToP[hat]) {
                // if person already assigned a hat the skip
                if ((assignedPeople & (1 << p)) == 0) {
                    ways += dfs(allMask, assignedPeople | (1 << p), hat + 1, hattToP, dp);
                    ways %= mod;
                }
            }
            return dp[hat][assignedPeople] = ways;
        }

    }
