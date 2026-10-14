import (
	"fmt"
	"sort"
)

func dividePlayers(skill []int) int64 {
	n := len(skill)
	if n%2 != 0 {
		return -1 // Return -1 if the number of players is not even
	}

	sort.Ints(skill) // Sort the skill array in ascending order

	// Calculate the target skill sum for each team
	targetSkill := skill[0] + skill[n-1]
	var totalChemistry int64

	for i := 0; i < n/2; i++ {
		// Pair the smallest and largest remaining skills
		if skill[i]+skill[n-1-i] != targetSkill {
			return -1 // Return -1 if a pair does not meet the target skill sum
		}
		// Calculate chemistry and add to total
		totalChemistry += int64(skill[i] * skill[n-1-i])
	}

	return totalChemistry
}
