var stringMatching = (words, all = words.join()) =>
    words.filter(w => all.split(w).length > 2);
