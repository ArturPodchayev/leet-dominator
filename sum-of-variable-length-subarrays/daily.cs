public class Solution {
    public int MinMoves(string[] classroom, int energy) {
        int m = classroom.Length, n = classroom[0].Length;
        Dictionary<int, int> littersMap = new(); // (i+1)*100+(j+1) since both m and n are smaller than 100
        int sX = -1, sY = -1;
        int[] dirs = [0, 1, 0, -1, 0];
        int litterCnt = 0;
        for(int i = 0; i < m; i++)
        {
            for(int j = 0; j < n; j++)
            {
                char c = classroom[i][j];
                if(c == 'S')
                {
                    sX = i;
                    sY = j;
                }
                else if(c == 'L')
                    littersMap.Add((i+1)*100+j+1, litterCnt++);
            }
        }
        int finalMask = (1<<litterCnt)-1;
        bool[,,,] visited = new bool[m, n, energy+1, finalMask+1];
        Queue<int[]> que = new();
        que.Enqueue([sX, sY, energy, 0, 0]); // id, curEnergy, moves, mask
        visited[sX, sY, energy, 0] = true;
        while(que.Count > 0)
        {
            int qLen = que.Count;
            for(int i = 0; i < qLen; i++)
            {
                int[] cur = que.Dequeue();
                int x = cur[0], y = cur[1], curE = cur[2], curMove = cur[3], mask = cur[4];
                if(mask == finalMask)
                    return curMove;
                    
                if(curE == 0)
                    continue;
                    
                for(int p = 0; p < 4; p++)
                {
                    int nextX = x + dirs[p], nextY = y + dirs[p+1];
                    if(nextX < 0 || nextY < 0 || nextX >= m || nextY >= n || classroom[nextX][nextY] == 'X')
                        continue;

                    char nextC = classroom[nextX][nextY];
                    int nextE = curE-1;

                    if(nextC == 'R')
                        nextE = energy;

                    if(nextE < 0)
                        continue;

                    int nextMask = mask;
                    if(nextC == 'L')
                    {
                        int key = (nextX+1)*100 + nextY +1;
                        nextMask |= (1 << littersMap[key]);
                    }

                    if(!visited[nextX, nextY, nextE, nextMask])
                    {
                        visited[nextX, nextY, nextE, nextMask] = true;
                        que.Enqueue([nextX, nextY, nextE, curMove+1, nextMask]);
                    }
                }
            }
        }

        return -1;
    }
}
