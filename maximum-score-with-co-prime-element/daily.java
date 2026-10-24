class Solution {
    public int countDaysTogether(String arriveAlice, String leaveAlice,
            String arriveBob, String leaveBob) {

        String start = arriveAlice.compareTo(arriveBob) > 0
                ? arriveAlice
                : arriveBob;

        String end = leaveAlice.compareTo(leaveBob) < 0
                ? leaveAlice
                : leaveBob;

        if (start.compareTo(end) > 0) {
            return 0;
        }

        int startDay = getDayOfYear(start);
        int endDay = getDayOfYear(end);

        return endDay - startDay + 1;
    }

    private int getDayOfYear(String date) {
        int[] daysInMonth = {
                31, 28, 31, 30, 31, 30,
                31, 31, 30, 31, 30, 31
        };

        int month = Integer.parseInt(date.substring(0, 2));
        int day = Integer.parseInt(date.substring(3, 5));

        int totalDays = day;

        for (int i = 0; i < month - 1; i++) {
            totalDays += daysInMonth[i];
        }

        return totalDays;
    }
}
