class Solution {
    public int getNumberOfBacklogOrders(final int[][] orders) {
        final Queue<int[]> buy = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        final Queue<int[]> sell = new PriorityQueue<>((a, b) -> a[0] - b[0]);

        for(final int[] order : orders) {
            if(order[2] == 0)
                buy.offer(new int[] { order[0], order[1] });
            else
                sell.offer(new int[] { order[0], order[1] });

            while(!buy.isEmpty() && !sell.isEmpty() && sell.peek()[0] <= buy.peek()[0]) {
                final int[] sellOrder = sell.peek(), buyOrder = buy.peek();

                final int processed = Math.min(sellOrder[1], buyOrder[1]);

                sellOrder[1] -= processed;
                buyOrder[1] -= processed;

                if(sellOrder[1] == 0)
                    sell.poll();

                if(buyOrder[1] == 0)
                    buy.poll();
            }
        }

        int backlog = 0;

        while(!buy.isEmpty())
            backlog = (backlog + buy.poll()[1]) % 1000000007;

        while(!sell.isEmpty())
            backlog = (backlog + sell.poll()[1]) % 1000000007;

        return backlog;
    }
}
