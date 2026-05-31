function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    // Sort the asteroids in ascending order
    asteroids.sort((a, b) => a - b);

    for (const asteroid of asteroids) {
        if (mass >= asteroid) {
            mass += asteroid; // Absorb the asteroid's mass
        } else {
            return false; // If mass is less than the asteroid, return false
        }
    }

    return true; // All asteroids can be destroyed
}
