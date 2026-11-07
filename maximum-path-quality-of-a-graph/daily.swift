class Solution {
    func assignTasks(_ servers: [Int], _ tasks: [Int]) -> [Int] {
        // Create priority queue for free servers
        var freeServers = PriorityQueue<Server>(ascending: true) {
            if $0.weight == $1.weight {
                return $0.index < $1.index
            }
            return $0.weight < $1.weight
        }
        
        // Create Priority queue for busy servers
        var busyServers = PriorityQueue<Server>(ascending: true) {
            return $0.availableTime < $1.availableTime
        }
        
        var result = [Int](repeating: 0, count: tasks.count)
        var currentTime = 0
        
        // Initialize the priority queue with all servers available at time 0
        for i in 0..<servers.count {
            freeServers.push(Server(availableTime: 0, weight: servers[i], index: i))
        }
        
        for i in 0..<tasks.count {
            currentTime = max(currentTime, i)
            
            // Move servers that have completed their tasks to the free queue
            while let top = busyServers.peek(),
                top.availableTime <= currentTime {
                    let freeServer = busyServers.pop()!
                    freeServers.push(freeServer)
            }
            
            // If no free servers, move time forward to the next available server
            if freeServers.isEmpty {
                currentTime = busyServers.peek()!.availableTime // Move to next available time
                while let top = busyServers.peek(), top.availableTime <= currentTime { // Make all busy servers free if their next availableTime is less than or equal to current time
                    let freeServer = busyServers.pop()!
                    freeServers.push(freeServer)
                }
            }
            
            // Assign the current task to the available server
            var server = freeServers.pop()!
            result[i] = server.index
            server.availableTime = currentTime + tasks[i]
            busyServers.push(server)
        }
        
        return result
    }
}

// Server Model
struct Server {
    var availableTime: Int
    let weight: Int
    let index: Int
}

// Generic Priority Queue implementation
struct PriorityQueue<Element> {
    private var heap: [Element]
    private let comparator: (Element, Element) -> Bool
    
    init(ascending: Bool, comparator: @escaping (Element, Element) -> Bool) {
        if ascending {
            self.comparator = comparator
        } else {
            self.comparator = { !comparator($0, $1) }
        }
        self.heap = []
    }
    
    var isEmpty: Bool {
        return heap.isEmpty
    }
    
    func peek() -> Element? {
        return heap.first
    }
    
    mutating func push(_ element: Element) {
        heap.append(element)
        siftUp(heap.count - 1)
    }
    
    mutating func pop() -> Element? {
        if heap.isEmpty {
            return nil
        }
        if heap.count == 1 {
            return heap.removeFirst()
        }
        heap.swapAt(0, heap.count - 1)
        let element = heap.removeLast()
        siftDown(0)
        return element
    }
    
    private mutating func siftUp(_ index: Int) {
        var child = index
        var parent = (child - 1) / 2
        while child > 0 && comparator(heap[child], heap[parent]) {
            heap.swapAt(child, parent)
            child = parent
            parent = (child - 1) / 2
        }
    }
    
    private mutating func siftDown(_ index: Int) {
        var parent = index
        while true {
            var leftChild = 2 * parent + 1
            var rightChild = 2 * parent + 2
            var minIndex = parent
            if leftChild < heap.count && comparator(heap[leftChild], heap[minIndex]) {
                minIndex = leftChild
            }
            if rightChild < heap.count && comparator(heap[rightChild], heap[minIndex]) {
                minIndex = rightChild
            }
            if minIndex == parent {
                break
            }
            heap.swapAt(parent, minIndex)
            parent = minIndex
        }
    }
}
