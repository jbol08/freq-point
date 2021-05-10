// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let pairs = new Set(arr);
    let count = 0;

    for (let value of arr) {
        pairs.delete(val);
    }
    if (pairs.has(num - val)) {
        count++
    }
    return count;
}
