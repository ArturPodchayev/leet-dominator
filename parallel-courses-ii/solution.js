var minNumberOfSemesters = function (n, relations, k) {
	const indegrees = new Array(n + 1);
	const dependencies = new Map();

	for (let i = 1; i <= n; ++i) {
		dependencies.set(i, new Set());
		indegrees[i] = 0;
	}

	for (const [from, to] of relations) {
		dependencies.get(from).add(to);
		indegrees[to]++;
	}

	let freeCourseQueue = [];
	let startQueue = [];

	for (let i = 1; i < indegrees.length; ++i) {
		if (indegrees[i] === 0) {
			if (dependencies.get(i).size === 0) {
				freeCourseQueue.push(i); //queue of items that are free to study at any time due to not unlocking any new dependencies
			} else {
				startQueue.push(i);
			}
		}
	}

	function generateCombos(queue) {
		let combos = [];
		let temp = new Array(k);

		function generateUniqueCombinations(start, index) {
			if (index === k) {
				combos.push([...temp]);
			} else {
				if (start < queue.length) {
					temp[index] = queue[start];
					generateUniqueCombinations(start + 1, index + 1);
					generateUniqueCombinations(start + 1, index);
				}
			}
		}
		generateUniqueCombinations(0, 0);
		return combos;
	}
	let minFound = Number.MAX_VALUE;

	function findMinSemesterTime(currQueue, currTime, prevCompleted, prevIndegrees) {
		//need to make a copy of completed/indegrees as each combination will have to have its own record
		let currCompleted = new Set(Array.from(prevCompleted));
		let currIndegrees = [...prevIndegrees];

		for (let i = 0; i < currQueue.length; ++i) {
			const node = currQueue[i];
			if (!currCompleted.has(node)) {
				currCompleted.add(node);
				for (const other of dependencies.get(node)) {
					currIndegrees[other]--;
				}
			}
		}
		++currTime;

		if (currCompleted.size === n) {
			minFound = Math.min(currTime, minFound);
			return;
		}

		let nextFreeCourses = [];
		let nextQueue = [];
		for (let i = 1; i < currIndegrees.length; ++i) {
			if (!currCompleted.has(i) && currIndegrees[i] === 0) {
				if (dependencies.get(i).size === 0) {
					nextFreeCourses.push(i);
				} else {
					nextQueue.push(i);
				}
			}
		}

		if (nextQueue.length > k) {
			const nextQueueCombos = generateCombos(nextQueue);
			for (const queueCombo of nextQueueCombos) {
				findMinSemesterTime(queueCombo, currTime, currCompleted, currIndegrees);
			}
		} else {
			while (nextQueue.length < k && nextFreeCourses.length) {
				nextQueue.push(nextFreeCourses.pop());
			}
			findMinSemesterTime(nextQueue, currTime, currCompleted, currIndegrees);
		}
	}

	const startTime = 0;
	const startCompleted = new Set();
	if (startQueue.length > k) {
		const nextQueueCombos = generateCombos(startQueue);
		for (const queueCombo of nextQueueCombos) {
			findMinSemesterTime(queueCombo, startTime, startCompleted, indegrees);
		}
	} else {
		while (startQueue.length < k && freeCourseQueue.length) {
			startQueue.push(freeCourseQueue.pop());
		}
		findMinSemesterTime(startQueue, startTime, startCompleted, indegrees);
	}
	return minFound;
};
