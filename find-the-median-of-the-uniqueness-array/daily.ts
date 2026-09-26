function evaluate(s: string, knowledge: string[][]): string {
    const map: Record<string, string> = Object.fromEntries(knowledge);
    const parts: string[] = s.split('(');

    return parts.slice(1).reduce((acc, part) => {
        const [left, right] = part.split(')');
        return acc + (map[left] ?? '?') + right ?? '';
    }, parts[0]);
};
