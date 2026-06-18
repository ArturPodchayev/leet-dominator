function angleClock(hour: number, minutes: number): number {
    // 1-Liner mapping hour hand to minute marks, converting difference to degrees, and finding the min angle
    return (Math.abs(minutes - ((hour % 12) * 5 + 5 / (60 / minutes))) * 360 / 60) > 180 
        ? 360 - (Math.abs(minutes - ((hour % 12) * 5 + 5 / (60 / minutes))) * 360 / 60) 
        : (Math.abs(minutes - ((hour % 12) * 5 + 5 / (60 / minutes))) * 360 / 60);
};
