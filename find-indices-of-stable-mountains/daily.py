class Solution:

  def sumGame(self, num: str) -> bool:
    n = len(num)
    mid = n // 2

    s1, q1 = 0, 0
    for ch in num[:mid]:
      if ch == "?":
        q1 += 1
      else:
        s1 += int(ch)

    s2, q2 = 0, 0
    for ch in num[mid:]:
      if ch == "?":
        q2 += 1
      else:
        s2 += int(ch)

    # Bob wins if and only if 2 * (s1 - s2) == 9 * (q2 - q1)
    # Alice wins if this condition does not hold
    return 2 * (s1 - s2) != 9 * (q2 - q1)
