function reorderSpaces(text: string): string {
    let spaces = text.split("").filter((l) => l === " ").length; 
    const words = text.match(/\b\w+\b/g)!; 
    let spacesgroup =
      words.length === 1 || words.length === 2 ? 1 : words.length - 1;
    let spaceslength = Math.floor(spaces / spacesgroup);
    let extra = spaces % spacesgroup;

    let stringr: string[] = [];

    if (words.length === 1) {
      return words[0] + " ".repeat(spaceslength);
    }

    if (words.length === 2) {
      return words[0] + " ".repeat(spaceslength) + words[1];
    }

    for (let i = 0; i < words.length - 1; i++) {
      stringr.push(words[i] + " ".repeat(spaceslength));
    }
    stringr.push(words[words.length - 1] + " ".repeat(extra));

    return stringr.join("");
};
