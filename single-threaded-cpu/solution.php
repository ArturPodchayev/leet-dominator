class ProcessingPriorityQueue extends SplPriorityQueue
{
    public function compare($priority1, $priority2): int
    {
        if ($priority1[1] === $priority2[1]) {
            return $priority2[2] - $priority1[2];
        }

        return $priority2[1] - $priority1[1];
    }
}

class Solution {

    /**
     * @param Integer[][] $tasks
     * @return Integer[]
     */
    function getOrder($tasks) {
        $enqueueQueue = new SplMinHeap();
        foreach ($tasks as $key => $task) {
            $tasks[$key][] = $key;
            $enqueueQueue->insert($tasks[$key]);
        }

        $processingQueue = new ProcessingPriorityQueue();

        $result = [];
        $time = 0;
        while(!$enqueueQueue->isEmpty() || !$processingQueue->isEmpty()) {
            if ($processingQueue->isEmpty() && $time < $enqueueQueue->current()[0]) {
                $time = $enqueueQueue->current()[0];
            }

            while (!$enqueueQueue->isEmpty()) {
                if ($time < $enqueueQueue->current()[0]) {
                    break;
                }

                $task = $enqueueQueue->extract();
                $processingQueue->insert($task, $task);
            }

            $current = $processingQueue->extract();
            $time += $current[1];
            $result[] = $current[2];
        }
        return $result;
    }
}
