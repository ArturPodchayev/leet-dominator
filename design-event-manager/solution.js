var EventManager = function(events) {
    this.priority = new Map();
    this.priorityQueue = new PriorityQueue((a, b) => {
        if (a.priority > b.priority) return -1;
        if (a.priority < b.priority) return 1;
        return a.eventId < b.eventId ? -1 : 1;
    });
    const n = events.length;
    for (let i = 0; i < n; ++i) {
        this.priorityQueue.enqueue({ eventId: events[i][0], priority: events[i][1] });
        this.priority.set(events[i][0], events[i][1]);
    }
};

EventManager.prototype.updatePriority = function(eventId, newPriority) {
    this.priorityQueue.enqueue({ eventId: eventId, priority: newPriority });
    this.priority.set(eventId, newPriority);
};

EventManager.prototype.pollHighest = function() {
    while (!this.priorityQueue.isEmpty()) {
        const element = this.priorityQueue.dequeue();
        if (this.priority.get(element.eventId) === element.priority) {
            this.priority.delete(element.eventId);
            return element.eventId;
        }
    }
    
    return -1;
};
