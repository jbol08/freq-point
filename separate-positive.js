// add whatever parameters you deem necessary
function separatePositive(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] < 0 && nums[end] > 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
        } else {
            if (nums[start] > 0) start = start + 1;
            else end = end - 1;
        }

    }
    return nums;
}
