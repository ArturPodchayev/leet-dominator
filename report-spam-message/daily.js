/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function (k, arrival, load) {
    let occupied = new MinPriorityQueue();
    let emptyServerAfterMOD = new MinPriorityQueue();
    let emptyServerBeforeMOD = new MinPriorityQueue();
    let timeUses = new Array(k).fill(0);

    for (let i = 0; i < k; i++) {
        emptyServerBeforeMOD.enqueue(i);
    }

    let max = 0;
    for (let i = 0; i < arrival.length; i++) {
        let mod = i % k;

        if (mod === 0) {
            [emptyServerBeforeMOD, emptyServerAfterMOD] = [emptyServerAfterMOD, emptyServerBeforeMOD];
        }

        while (occupied.front()?.priority <= arrival[i]) {
            let newEmpty = occupied.dequeue().element;
            newEmpty < mod ? emptyServerBeforeMOD.enqueue(newEmpty) : emptyServerAfterMOD.enqueue(newEmpty);
        }

        while (emptyServerAfterMOD.front()?.element < mod) {
            emptyServerBeforeMOD.enqueue(emptyServerAfterMOD.dequeue().element);
        }

        let server = emptyServerAfterMOD.size() ?
            emptyServerAfterMOD.dequeue().element :
            (emptyServerBeforeMOD.size() ? emptyServerBeforeMOD.dequeue().element : -1);

        if (server === -1) continue;
        max = Math.max(++timeUses[server], max);
        occupied.enqueue(server, arrival[i] + load[i]);
    }

    let ans = [];
    for (let i = 0; i < k; i++) {
        if (timeUses[i] === max) ans.push(i);
    }

    return ans;
};
