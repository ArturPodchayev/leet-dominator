function sortSentence(s: string): string {
  return s.split(' ')
  .sort((a, b) => +a[a.length - 1] - +b[b.length - 1])
  .join(' ')
  .replace(/\d/gm, '')
};
