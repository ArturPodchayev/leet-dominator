/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    const n = tasks.length;
    // PQ points to all the tasks
    const taskQ = new PriorityQueue((a, b) => {
        if(a[0] === b[0]){
            if(a[1] === b[1])
                return a[2] - b[2];
            else
                return a[1]-b[1];
        }else
            return a[0]-b[0];

    });

    const cpuQ = new PriorityQueue((a, b) => {
        if(a[1] === b[1]){
            return a[2]-b[2];
        }else
            return a[1]-b[1];

    });

    // CPU Queue points to all the available tasks to CPU at the current time
    const order = [];

    let time = Number.MAX_VALUE;

    tasks.forEach((ele, index) => {
        time = Math.min(ele[0], time);
        taskQ.enqueue([ele[0], ele[1], index]);
    });

    while(taskQ.size() > 0 || cpuQ.size() > 0){
        // Check all the available tasks which are ready to push to CPU queueu
        while(taskQ.size() > 0 && taskQ.front()[0] <= time){
            cpuQ.enqueue(taskQ.dequeue());
        }

        // process the cpu q tasks based on processing time till we don't have new tasks to add
        while(cpuQ.size() > 0 && (taskQ.size() === 0 || taskQ.front()[0] > time)){
            const [enqueTime, processingTime, index] = cpuQ.dequeue();
            order.push(index);
            time += processingTime;
        }
        time = Math.max(time, taskQ.size() > 0 ? taskQ.front()[0] : Number.MIN_VALUE)
    }

    return order;
};
