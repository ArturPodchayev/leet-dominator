import heapq
from collections import defaultdict
class EventManager:

    def __init__(self, events: list[list[int]]):
        self.heap = []
        self.mp = defaultdict(int)
        for event,priority in events:
            heapq.heappush(self.heap,(-priority,event))
            self.mp[event] = priority

    def updatePriority(self, eventId: int, newPriority: int) -> None:
        self.mp[eventId] = newPriority
        heapq.heappush(self.heap,(-newPriority,eventId))


    def pollHighest(self) -> int:
        while self.heap:
            priority,event = heapq.heappop(self.heap)
            priority *=-1
            if self.mp[event] == priority:
                del self.mp[event]
                return event
        return -1
        


# Your EventManager object will be instantiated and called as such:
# obj = EventManager(events)
# obj.updatePriority(eventId,newPriority)
# param_2 = obj.pollHighest()
