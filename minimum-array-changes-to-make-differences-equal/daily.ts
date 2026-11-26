function canAliceWin(n: number): boolean {
    if (n < 10) return false; // 10
    else if (n < 19) return true; //9
    else if (n < 27) return false; //8
    else if (n < 34) return true; //7
    else if (n < 40) return false; //6
    else if (n < 45) return true; //5
    else if (n < 49) return false; //4
    else return true;
};
