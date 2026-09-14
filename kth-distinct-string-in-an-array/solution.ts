function kthDistinct(arr: string[], k: number): string {
    const map: any = {};

    arr.forEach(s => map[s] = (map[s] || 0) + 1);

    for (const key in map) {
        if (map[key] === 1) {
            k--;
            if (!k)
                return key
        }
    }
    return ""
};
