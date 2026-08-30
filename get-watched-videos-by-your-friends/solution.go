func buildGraph(friends [][]int) map[int]map[int]bool {
    graph := make(map[int]map[int]bool)

    for i := range len(friends) {
        graph[i] = make(map[int]bool)
    }

    for i, members := range friends {
        for _, member := range members {
            graph[i][member] = true
            graph[member][i] = true
        } 
    }
    return graph
}

func watchedVideosByFriends(watchedVideos [][]string, friends [][]int, id int, level int) []string {
    graph := buildGraph(friends)
    // fmt.Println(graph)

    q := list.New()
    q.PushBack(id)
    visited := make(map[int]bool)

    for q.Len() > 0 && level > 0 {
        n := q.Len()

        for i := 0; i < n; i++ {
            cur := q.Front().Value.(int)
            q.Remove(q.Front())

            visited[cur] = true

            for friend, _ := range graph[cur] {
                if !visited[friend] {
                    visited[friend] = true
                    q.PushBack(friend)
                }
            }
        }

        level--
    }

    // fmt.Println(q, q.Len())
    
    watchedVideosAtLevel := map[string]int{}
    ans := []string{}

    for cur:= q.Front(); cur != nil; cur = cur.Next(){
        curFriend := cur.Value.(int)
        for _, video := range watchedVideos[curFriend] {
            watchedVideosAtLevel[video]++ 
        }
    }

    for uniqueVideo, _ := range watchedVideosAtLevel{
        ans = append(ans, uniqueVideo)
    }

    // fmt.Println(watchedVideosAtLevel)


    slices.SortFunc(ans, func(i, j string) int {
        if watchedVideosAtLevel[i] == watchedVideosAtLevel[j] {
            return strings.Compare(i, j)
        } else if watchedVideosAtLevel[i] < watchedVideosAtLevel[j] {
            return -1
        }
        return 1
    })

    return ans

}
