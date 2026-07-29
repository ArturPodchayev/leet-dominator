class OrderedStream:

    def __init__(self, n: int):
        self.count = 1
        self.hm = {}

    def insert(self, idKey: int, value: str) -> List[str]:
        self.hm[idKey] = value
        outp = []
        while self.count in self.hm:
            outp.append(self.hm[self.count])
            del self.hm[self.count]
            self.count += 1
        return outp
