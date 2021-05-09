// add whatever parameters you deem necessary
function averagePair(arr,nums) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let average = (arr[start] + arr[end]) / 2;
        if (average === nums) {
            return true;
        } else if (average < nums) {
            start++;
            
        } else {
            end--;
        }    
    }
    return false;
}
