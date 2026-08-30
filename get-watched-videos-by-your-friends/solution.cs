public class Solution {
    private Dictionary<string, int> _videosFrequencies;
    private Queue<(int, int)> _personLevelQueue;
    private HashSet<int> _vidited;

    public IList<string> WatchedVideosByFriends(IList<IList<string>> watchedVideos, int[][] friends, int id, int level) {
        _videosFrequencies = new Dictionary<string, int>();
        _personLevelQueue = new Queue<(int, int)>();
        _vidited = new HashSet<int>();

        _personLevelQueue.Enqueue((id, 0));
        _vidited.Add(id);

        while (_personLevelQueue.Count() > 0){
            (int currPerson, int currLevel) = _personLevelQueue.Dequeue();

            if(currLevel == level)
                AddWatchedVideos(watchedVideos[currPerson]);

            if (currLevel < level)
                AddFriendsToQueue(friends[currPerson], currLevel + 1);     
        }
        
        var sortedList = _videosFrequencies.ToList();
        sortedList.Sort(SortByFrequencyThenAlphabetically);

        return sortedList.Select(x => x.Key).ToList();
    }

    private void AddFriendsToQueue(int[] friendsToAdd, int level){
        for (var i = 0; i < friendsToAdd.Length; i++){
            // Only add to queue if visited first time
            if(_vidited.Add(friendsToAdd[i])){
                _personLevelQueue.Enqueue((friendsToAdd[i], level));
            }
        }
    }

    private void AddWatchedVideos(IList<string> videos){
        foreach(var vid in videos){
            if (!_videosFrequencies.ContainsKey(vid)) 
                _videosFrequencies[vid] = 0;
            _videosFrequencies[vid]++;
        }
    }

    private int SortByFrequencyThenAlphabetically(KeyValuePair<string, int> a, KeyValuePair<string, int> b){
        if(a.Value.CompareTo(b.Value) != 0)
            return a.Value.CompareTo(b.Value);
        return a.Key.CompareTo(b.Key);
    }
}
