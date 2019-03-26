function swap(swap1, language, library) {
    [swap1[language], swap1[library]] = [swap1[library], swap1[language]];
}
swap(swap1, 'language', 'library');