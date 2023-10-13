function sortCharactersBasedOnFrequency(string) {
    // sort characters based on frequency
    const charMap = {};
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    const sortedChars = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);
    let result = "";
    for (let char of sortedChars) {
        result += char.repeat(charMap[char]);
    }
    return result;
}

const string = "hello world";
const result = sortCharactersBasedOnFrequency(string);
console.log(result); // "lllooehhddwr"