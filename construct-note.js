// add whatever parameters you deem necessary
function constructNote(str1,str2) {
    for (let char in str2) {
        if (!str1[char]) {
            return false;
        }
        if (str1[char] > str2[char]) {
            return false;
        }
        return true;
    }
}
