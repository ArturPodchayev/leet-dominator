class SortedIdArray {
    private ids: number[]
    constructor(k: number) {
        const initialIds: number[] = []
        for (let i = 0; i < k; i++) initialIds.push(i)
        this.ids = initialIds
    }

    getIds(): number[] {
        return this.ids
    }

    removeFreeServerId(id: number) {
        let start = 0, end = this.ids.length - 1
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2)
            if (this.ids[mid] === id) {
                this.ids.splice(mid, 1)
                return
            }
            if (this.ids[mid] < id) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }

    addFreeServerId(id: number) {
        let start = 0, end = this.ids.length - 1
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2)
            if (this.ids[mid] === id) return
            if (this.ids[mid] < id) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
        this.ids.splice(start, 0, id)
    }
}

type Server = { id: number, timeAvailable: number }
class ServerManager {
    private serverIds: SortedIdArray
    private heap: MinPriorityQueue<Server>
    private serverIdToNumRequests: Map<number, number>
    private maxRequests: number
    maxRequestServerIds: number[]
    private serverCapacity: number
    constructor(k: number) {
        this.heap = new MinPriorityQueue((server: Server) => server.timeAvailable)
        this.serverIdToNumRequests = new Map()
        this.maxRequests = 0
        this.maxRequestServerIds = []
        this.serverIds = new SortedIdArray(k)
        this.serverCapacity = k
    }

    atCapacity(): boolean {
        return this.heap.size() === this.serverCapacity
    }

    addBusyServer(serverId: number, arrivalTime: number, currentLoad: number): void {
        const server = { id: serverId, timeAvailable: arrivalTime + currentLoad }
        this.heap.enqueue(server)
        this.serverIdToNumRequests.set(server.id, (this.serverIdToNumRequests.get(server.id) || 0) + 1)

        const serverTotalRequests = this.serverIdToNumRequests.get(serverId)
        if (serverTotalRequests > this.maxRequests) {
            this.maxRequestServerIds = [serverId]
            this.maxRequests = serverTotalRequests
        } else if (serverTotalRequests === this.maxRequests) {
            this.maxRequestServerIds.push(serverId)
        }

        this.serverIds.removeFreeServerId(serverId)
    }

    removeFreeServers(arrivalTime: number) {
        while (this.heap.size() > 0 && this.heap.front().timeAvailable <= arrivalTime) {
            this.serverIds.addFreeServerId(this.heap.dequeue().id)
        }
    }

    findOpenServer(target: number): number {
        let start = 0, end = this.serverIds.getIds().length - 1
        let index = -1
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2)
            if (this.serverIds.getIds()[mid] >= target) {
                end = mid - 1
                index = mid
            } else {
                start = mid + 1
            }
        }

        return this.serverIds.getIds()[index === -1 ? 0 : index]
    }
}

function busiestServers(k: number, arrival: number[], load: number[]): number[] {
    const serverManager = new ServerManager(k)

    for (let i = 0; i < arrival.length; i++) {
        serverManager.removeFreeServers(arrival[i])

        if (serverManager.atCapacity()) continue;

        const nextOpenServer = serverManager.findOpenServer((i % k))
        serverManager.addBusyServer(nextOpenServer, arrival[i], load[i])
    }

    return serverManager.maxRequestServerIds
};
