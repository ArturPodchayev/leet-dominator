function assignTasks(servers: number[], tasks: number[]): number[] {
    const minHeapAvailableServers = createMinHeapAvailableServers(servers);
    const minHeapProcessingServers = new PriorityQueue<Server>((first, second) => comparator(first, second));

    const serverIndicesPerAssignedTask = new Array(tasks.length);

    for (let taskStartTime = 0; taskStartTime < tasks.length; ++taskStartTime) {
        makeAvailableServersWithCompletedTasks(taskStartTime, minHeapProcessingServers, minHeapAvailableServers);
        const serverForNextTask = getServerForNextTask(minHeapProcessingServers, minHeapAvailableServers);
        serverIndicesPerAssignedTask[taskStartTime] = serverForNextTask.index;

        const nextTaskCompletionTime =
            taskStartTime
            + tasks[taskStartTime]
            + Math.max(serverForNextTask.taskCompletionTime - taskStartTime, 0);

        minHeapProcessingServers.enqueue(new Server(nextTaskCompletionTime, serverForNextTask.weight, serverForNextTask.index));
    }

    return serverIndicesPerAssignedTask;
};

const CURRENTLY_NOT_PROCESSING_SERVER = 0;

class Server {

    constructor(public taskCompletionTime: number, public weight: number, public index: number) {
        this.taskCompletionTime = taskCompletionTime;
        this.weight = weight;
        this.index = index;
    }
}

function comparator(first: Server, second: Server): number {
    if (first.taskCompletionTime !== second.taskCompletionTime) {
        return first.taskCompletionTime - second.taskCompletionTime;
    }
    if (first.weight !== second.weight) {
        return first.weight - second.weight;
    }
    return first.index - second.index;
}

function createMinHeapAvailableServers(servers: number[]): PriorityQueue<Server> {
    const minHeap = new PriorityQueue<Server>((first, second) => comparator(first, second));
    for (let i = 0; i < servers.length; ++i) {
        minHeap.enqueue(new Server(CURRENTLY_NOT_PROCESSING_SERVER, servers[i], i));
    }
    return minHeap;
}

function getServerForNextTask(minHeapProcessingServers: PriorityQueue<Server>, minHeapAvailaфbleServers: PriorityQueue<Server>): Server {
    if (!minHeapAvailableServers.isEmpty()) {
        return minHeapAvailableServers.dequeue();
    }
    return minHeapProcessingServers.dequeue();
}

function makeAvailableServersWithCompletedTasks(taskStartTime: number, minHeapProcessingServers: PriorityQueue<Server>, minHeapAvailableServers: PriorityQueue<Server>): void {
    while (!minHeapProcessingServers.isEmpty() && minHeapProcessingServers.front().taskCompletionTime <= taskStartTime) {
        const freedServer = minHeapProcessingServers.dequeue();
        minHeapAvailableServers.enqueue(new Server(CURRENTLY_NOT_PROCESSING_SERVER, freedServer.weight, freedServer.index));
    }
}
