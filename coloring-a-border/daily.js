var remainingMethods = function (nodeCount, buggyNode, allEdges) {
	const adjacencyList = Array.from({ length: nodeCount }, () => []);
	for (const [sourceNode, targetNode] of allEdges) {
		adjacencyList[sourceNode].push(targetNode);
	}
	const buggyNodes = Array(nodeCount).fill(false);
	buggyNodes[buggyNode] = true;
	const queue = [buggyNode];
	while (queue.length) {
		const sourceNode = queue.shift();
		for (const targetNode of adjacencyList[sourceNode]) {
			if (!buggyNodes[targetNode]) {
				buggyNodes[targetNode] = true;
				queue.push(targetNode);
			}
		}
	}
	const remainingNodes = [];
	for (let sourceNode = 0; sourceNode < nodeCount; sourceNode++) {
		if (buggyNodes[sourceNode]) continue;
		for (const targetNode of adjacencyList[sourceNode]) {
			if (buggyNodes[targetNode]) {
				// All nodes
				return Array.from({ length: nodeCount }, (_, index) => index);
			}
		}
		remainingNodes.push(sourceNode);
	}
	return remainingNodes;
};
