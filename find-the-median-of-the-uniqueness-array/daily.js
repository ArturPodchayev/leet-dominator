var evaluate = function (s, knowledge) {
    let ans = "";

    let map = new Map(knowledge);

    let KEY = null;
    for (let c of s) {
        switch (c) {
            case "(":
                KEY = "";
                break;
            case ")":
                if (map.has(KEY)) ans += map.get(KEY);
                else ans += "?"; // append ? if key not found, else its val

                KEY = null;
                break;
            default:
                if (KEY !== null) KEY += c;
                else ans += c; // not a key, so it is ans
                break;
        }
    }

    return ans;
};
