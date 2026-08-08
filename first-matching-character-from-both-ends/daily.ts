function validSequence(word1: string, word2: string): number[] {
    const n = word1.length
    const m = word2.length
    const covers: number[] = new Array(n).fill(0)
    let j = m - 1

    for (let i = n - 1; i >= 0; i--) {
        if (j >= 0 && word1[i] === word2[j]) {
            covers[i] = i === n - 1 ? 1 : covers[i + 1] + 1
            j--
        } else {
            covers[i] = i === n - 1 ? 0 : covers[i + 1]
        }
    }

    j = 0
    const result: number[] = []
    let victory = -1

    for (let i = 0; i < n; i++) {
        if (word1[i] === word2[j]) {
            result.push(i)
            j++
            if (j === m) {
                break
            }
        } else {
            if ((i === n - 1 ? 0 : covers[i + 1]) >= m - j - 1) {
                result.push(i)
                j++
                victory = i + 1
                break
            }
        }
    }

    if (result.length === m) {
        return result
    }

    if (victory === -1) {
        return []
    }

    for (let i = victory; i < n; i++) {
        if (word1[i] === word2[j]) {
            result.push(i)
            j++
        }
        if (j === m) {
            break
        }
    }

    return result.length === m ? result : []
}
