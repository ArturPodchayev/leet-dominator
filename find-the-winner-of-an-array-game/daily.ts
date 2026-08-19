function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    let count = n * 2
    const reservedByRow: {[key: number]: Set<number>} = {}
    for (const reservation of reservedSeats) {
        const [row, column] = reservation
        if (column != 1 && column != 10) {
            if (!reservedByRow[row]) {
                count -= 2
                reservedByRow[row] = new Set()
            }
            if ([2, 3, 4, 5].includes(column)) {reservedByRow[row].add(1)}
            if ([4, 5, 6, 7].includes(column)) {reservedByRow[row].add(2)}
            if ([6, 7, 8, 9].includes(column)) {reservedByRow[row].add(3)}
        }

    }
    for (const reservations of Object.values(reservedByRow)) {
        if (reservations.size == 1 || reservations.size == 2) {
            count += 1
        }
    }
    return count
};
