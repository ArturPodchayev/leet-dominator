var numberOfRounds = function(startTime, endTime) {
    let [shr, smin] = (startTime.split(":").map(x => +x))
    let [ehr, emin] = (endTime.split(":").map(x => +x))

    let reverse = false;
    if (shr > ehr || (shr === ehr && smin > emin))
        reverse = true;

    // in between rounds
    let inbet = (ehr - (shr + 1)) * 4

    // initial rounds
    smin =
        Math.trunc(smin / 15) +
        ((smin / 15 !== Math.trunc(smin / 15)) ? 1 : 0)
    smin = 4 - smin

    // final rounds
    emin = Math.trunc(emin / 15);

    // answer
    let ans = inbet + smin + emin;
    return reverse ? 96 + ans : ans
}
