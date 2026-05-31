import "slices"
func asteroidsDestroyed(mass int, asteroids []int) bool {
    slices.Sort(asteroids)
    for i:=0; i<len(asteroids); i++ {
        if asteroids[i] > mass {
            return false
        }
        mass += asteroids[i]
    }
    return true
}
