class Solution {
    public int earliestFinishTime(int[] landStartTime, int[] landDuration, int[] waterStartTime, int[] waterDuration) {
        int smallestRide = Integer.MAX_VALUE;

        int[][] landRides = new int[landStartTime.length][2];
        int[][] waterRides = new int[waterStartTime.length][2];

        for (int i = 0; i < landStartTime.length; i++) {
            landRides[i][0] = landStartTime[i];
            landRides[i][1] = landStartTime[i] + landDuration[i];
        }

        for (int i = 0; i < waterStartTime.length; i++) {
            waterRides[i][0] = waterStartTime[i];
            waterRides[i][1] = waterStartTime[i] + waterDuration[i];
        }

        Arrays.sort(landRides, (a, b) -> {
            if (a[1] != b[1]) {
                return Integer.compare(a[1], b[1]);
            } else {
                return Integer.compare(b[0], a[0]);
            }
        });

        Arrays.sort(waterRides, (a, b) -> {
            if (a[1] != b[1]) {
                return Integer.compare(a[1], b[1]);
            } else {
                return Integer.compare(b[0], a[0]);
            }
        });

        // Land -> Water
        for (int i = 0, j = 0;
             i < landRides.length &&
             j < waterRides.length &&
             smallestRide > landRides[i][1];
             i++) {

            int[] landRide = landRides[i];

            for (; j < waterRides.length &&
                   smallestRide > waterRides[j][1];
                 j++) {

                int[] waterRide = waterRides[j];

                if (landRide[1] <= waterRide[0]) {
                    smallestRide = Math.min(smallestRide, waterRide[1]);
                } else {
                    smallestRide = Math.min(
                            smallestRide,
                            landRide[1] + waterRide[1] - waterRide[0]
                    );
                }
            }
        }

        // Water -> Land
        for (int i = 0, j = 0;
             i < waterRides.length &&
             j < landRides.length &&
             smallestRide > waterRides[i][1];
             i++) {

            int[] waterRide = waterRides[i];

            for (; j < landRides.length &&
                   smallestRide > waterRides[i][1];
                 j++) {

                int[] landRide = landRides[j];

                if (waterRide[1] <= landRide[0]) {
                    smallestRide = Math.min(smallestRide, landRide[1]);
                } else {
                    smallestRide = Math.min(
                            smallestRide,
                            waterRide[1] + landRide[1] - landRide[0]
                    );
                }
            }
        }

        return smallestRide;
    }
}
