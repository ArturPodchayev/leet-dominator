function dividePlayers(skill: number[]): number {
    const m = new Map()
    let total = 0
    for(const num of skill){
        total += num
        m.set(num, (m.get(num) || 0 ) + 1)
    }

    const sumEach = total / (skill.length / 2)
    let res = 0
    const keys = Array.from(m.keys())
    for(const key of keys){
        const value = m.get(key)
        if(value === 0) continue;

        const invertValue = m.get(sumEach-key) || 0
        if(key == sumEach - key){
            if(invertValue % 2 === 1){
                return -1
            }
            res += key * key * (invertValue/2)
            m.set(key, 0)
        }
        else if(invertValue === value){
            res += key * (sumEach-key) * value
            m.set(key, 0)
            m.set(sumEach-key, 0)
        } else{
            return -1
        }
    }
    return res
};
