/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    // Minute hand: 6 degrees per minute
    const minuteAngle = 6 * minutes;
    
    // Hour hand: 30 degrees per hour + 0.5 degrees per minute
    const hourAngle = 30 * hour + 0.5 * minutes;
    
    // Get absolute difference
    let angle = Math.abs(hourAngle - minuteAngle);
    
    // Return smaller angle
    return Math.min(angle, 360 - angle);
};
