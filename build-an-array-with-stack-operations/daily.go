package main
import "slices"

func gcdSum(input []int) int64 {
    var prefixGreatestCommonDivisor []int = createPrefixGreatestCommonDivisor(input)
    return calculateSumOfGreatestCommonDivisorOfMinMaxPairsInPrefix(prefixGreatestCommonDivisor)
}

func calculateSumOfGreatestCommonDivisorOfMinMaxPairsInPrefix(prefixGreatestCommonDivisor []int) int64 {
    slices.Sort(prefixGreatestCommonDivisor)
    var sumOfGreatestCommonDivisorOfMinMaxPairs int64 = 0

    front := 0
    back := len(prefixGreatestCommonDivisor) - 1

    // If the number of elements is odd, then the middle element is not included.
    for front < back {
        minValue := prefixGreatestCommonDivisor[front]
        maxValue := prefixGreatestCommonDivisor[back]
        sumOfGreatestCommonDivisorOfMinMaxPairs += int64(findGreatestCommonDivisor(minValue, maxValue))
        front++
        back--
    }
    return sumOfGreatestCommonDivisorOfMinMaxPairs
}

func createPrefixGreatestCommonDivisor(input []int) []int {
    maxValueFromStart := 0
    prefixGreatestCommonDivisor := make([]int, len(input))

    for i := range input {
        maxValueFromStart = max(maxValueFromStart, input[i])
        prefixGreatestCommonDivisor[i] = findGreatestCommonDivisor(input[i], maxValueFromStart)
    }
    return prefixGreatestCommonDivisor
}

func findGreatestCommonDivisor(smaller int, larger int) int {
    if smaller == 0 {
        return larger
    }
    return findGreatestCommonDivisor(larger%smaller, smaller)
}
