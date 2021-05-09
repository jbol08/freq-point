// add whatever parameters you deem necessary
function constructNote(str2, str1) {
    let str1Freq = {};
    let str2Freq = {};

    for (let char of str1) {
        str1Freq[char] = ++str1Freq[char] || 1;
    }
    for (let char of str2) {
        str2Freq[char] = ++str2Freq[char] || 1;
    }
    for (let char in str2Freq) {
        if (!str1Freq[char]) {
            return false;
        }
        if (str2Freq[char] > str1Freq[char]) {
            return false;
        }
    }
    return true;
}

module.exports = constructNote;
