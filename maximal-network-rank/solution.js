/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const roadGraph = {};
    let maxRank = 0;

    roads.forEach(road => {
        if (!roadGraph[road[0]]) {
            roadGraph[road[0]] = [];
        }

        roadGraph[road[0]].push(road[1]);

        if (!roadGraph[road[1]]) {
            roadGraph[road[1]] = [];
        }

        roadGraph[road[1]].push(road[0]);
    })

    Object.keys(roadGraph).forEach((key) => {
        const vertex1 = roadGraph[key];


        for (const [key2, value] of Object.entries(roadGraph)) {
            if (key === key2) continue;
            const vertex2 = value;
            let rank = vertex1.length + vertex2.length;
            let commonEdges = 0;

            if (vertex1.indexOf(parseInt(key2)) >= 0) commonEdges++;

            rank -= commonEdges;
            if (maxRank < rank) maxRank = rank;
        }
    })

    return maxRank;
};
