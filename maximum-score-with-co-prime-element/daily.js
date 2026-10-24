/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const end = leaveAlice < leaveBob ? leaveAlice : leaveBob;
    const start = arriveAlice > arriveBob ? arriveAlice : arriveBob;

    if(start > end) return 0;

    const startDayNumber = findDayNumber(start);
    const endDayNumber = findDayNumber(end);

    return endDayNumber - startDayNumber + 1;
};

function findDayNumber(date) {
    const [month, days] = date.split("-").map((a) => Number(a));

    const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dayNumber = 0;

    for(let i = 1; i <= month - 1; i++) {
        dayNumber += monthDays[i];
    }

    dayNumber += days;

    return dayNumber;
}
