function countTestedDevices(batteryPercentages: number[]): number {
    let testedDev = 0;

    for (let i = 0; i < batteryPercentages.length; i++) {
      if (batteryPercentages[i] > 0) {
        testedDev++;
        for (let j = i + 1; j < batteryPercentages.length; j++) {
          if (batteryPercentages[j] > 0) {
            batteryPercentages[j]--;
          }
        }
      }
    }
    return testedDev;
};
