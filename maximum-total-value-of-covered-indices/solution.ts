function maxTotal(inputValues: number[], tokens: string): number {
    let maxValueOfCoveredIndices = 0;

    for (let i = 0; i < inputValues.length; ++i) {
        if (tokens[i] === '0') {
            continue;
        }

        let index = i;
        let sumSectionCoveredIndices = (index > 0) ? inputValues[index - 1] : 0;
        let minValueSectionCoveredIndices = (i > 0) ? inputValues[index - 1] : Number.MIN_SAFE_INTEGER;

        while (index < inputValues.length && tokens[index] === '1') {
            sumSectionCoveredIndices += inputValues[index];
            minValueSectionCoveredIndices = Math.min(minValueSectionCoveredIndices, inputValues[index]);
            ++index;
        }
        minValueSectionCoveredIndices = (i === 0) ? 0 : minValueSectionCoveredIndices;
        maxValueOfCoveredIndices += sumSectionCoveredIndices - minValueSectionCoveredIndices;
        i = index - 1;
    }

    return maxValueOfCoveredIndices;
};
