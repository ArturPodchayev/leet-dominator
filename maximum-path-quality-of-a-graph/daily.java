import java.util.PriorityQueue;

public class Solution {
    public int[] assignTasks(int[] servers, int[] tasks) {
        int n = servers.length;
        int m = tasks.length;
        int[] result = new int[m];

        // Min-heap for free servers: sorted by weight, then by index
        PriorityQueue<int[]> freeServers = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]);
            return Integer.compare(a[1], b[1]);
        });

        // Min-heap for busy servers: sorted by freeTime, then by weight, then by index
        PriorityQueue<int[]> busyServers = new PriorityQueue<>((a, b) -> {
            if (a[2] != b[2]) return Integer.compare(a[2], b[2]); // freeTime
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]); // weight
            return Integer.compare(a[1], b[1]); // index
        });

        // Initialize free servers: array contains {weight, index, freeTime}
        for (int i = 0; i < n; i++) {
            freeServers.offer(new int[]{servers[i], i, 0});
        }

        int currTime = 0;
        for (int i = 0; i < m; i++) {
            // The task arrives at second `i`. Time cannot be behind the arrival time.
            currTime = Math.max(currTime, i);

            // 1. Release all busy servers that finished their tasks by currTime
            while (!busyServers.isEmpty() && busyServers.peek()[2] <= currTime) {
                freeServers.offer(busyServers.poll());
            }

            // 2. If no servers are free, fast-forward time to the next closest finish time
            if (freeServers.isEmpty()) {
                currTime = busyServers.peek()[2];
                // Process releases at this new fast-forwarded timestamp
                while (!busyServers.isEmpty() && busyServers.peek()[2] <= currTime) {
                    freeServers.offer(busyServers.poll());
                }
            }

            // 3. Assign the task to the top available server
            int[] server = freeServers.poll();
            result[i] = server[1]; // Store the server index
            
            // Update the server's availability time and push to the busy heap
            server[2] = currTime + tasks[i];
            busyServers.offer(server);
        }

        return result;
    }
}
