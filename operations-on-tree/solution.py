from collections import defaultdict

class LockingTree:
    def __init__(self, parent: List[int]):
        self.locks = [0] * len(parent)
        self.parent = parent
        self.children = defaultdict(list)
        for i, p in enumerate(parent):
            if p != -1:
                self.children[p].append(i)

    def lock(self, node: int, user: int) -> bool:
        if self.locks[node] != 0:
            return False
        self.locks[node] = user
        return True

    def unlock(self, node: int, user: int) -> bool:
        if self.locks[node] != user:
            return False
        self.locks[node] = 0
        return True

    def upgrade(self, node: int, user: int) -> bool:
        if self.locks[node] != 0:
            return False
        if not self._has_locked_descendant(node):
            return False
        if self._has_locked_ancestor(node):
            return False
        self.lock(node, user)
        self._clear_descendants(node)
        return True

    def _has_locked_descendant(self, node: int) -> bool:
        stack = [n for n in self.children[node]]
        while stack:
            current = stack.pop()
            if self.locks[current] != 0:
                return True
            stack.extend(self.children[current])
        return False

    def _has_locked_ancestor(self, node: int) -> bool:
        while node != -1:
            if self.locks[node] != 0:
                return True
            node = self.parent[node]
        return False

    def _clear_descendants(self, node: int):
        stack = [n for n in self.children[node]]
        while stack:
            current = stack.pop()
            self.locks[current] = 0
            stack.extend(self.children[current])
