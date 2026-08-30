 class Solution2 {

    record Pair(String movie, int frq) {
    }

    public List<String> watchedVideosByFriends(List<List<String>> watchedVideos, int[][] friends, int id, int level) {

      int n = friends.length;
      var visit = new boolean[n];
      int[] queue = new int[n];
      int left = 0;
      int right = 0;
      int size = 1;
      queue[0] = id;
      visit[id] = true;

      while (level != 0) {

        int sz = size;

        for (int i = 0; i < sz; i++) {

          int nd = queue[left];
          left = (left + 1) % n;
          size--;

          for (int frd : friends[nd]) {

            if (visit[frd])
              continue;

            right = (right + 1) % n;
            queue[right] = frd;
            visit[frd] = true;
            size++;

          }
        }
        level--;
      }

      HashMap<String, Integer> map = new HashMap<>();
      while (size > 0) {
        int cur = queue[left];
        left = (left + 1) % n;
        size--;
        watchedVideos.get(cur).forEach(movie -> map.merge(movie, 1, Integer::sum));
      }

      List<Pair> pairs = new ArrayList<>();

      for (String movie : map.keySet())
        pairs.add(new Pair(movie, map.get(movie)));

      pairs.sort((a, b) -> (a.frq != b.frq) ? Integer.compare(a.frq, b.frq) : a.movie.compareTo(b.movie));

      List<String> result = new ArrayList<>();

      pairs.forEach(pair -> result.add(pair.movie));
      return result;
    }
  }
