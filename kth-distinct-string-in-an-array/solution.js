function kthDistinct(arr, k) {
    var dict = {};
    arr.forEach(function (item) {
        if (dict[item])
            dict[item]++;
        else
            dict[item] = 1;
    });
    for (var key in dict) {
        if (dict[key] == 1) {
            k--;
            if (k == 0)
                return key;
        }
    }
    return "";
}
;
