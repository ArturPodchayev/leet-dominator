function minOperations(boxes: string): number[] {
    let answers: number[] = []
    for (let i = 0; i < boxes.length; i++) {
        let op: number = 0;

        for (let j = 0; j < boxes.length; j++) {
            if (i == j) continue
            else if (boxes[j] == '1')
                op += Math.abs(i - j)
        }
        answers.push(op)
    }
    return answers
};
