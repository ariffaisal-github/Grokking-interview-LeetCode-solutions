var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [i, map.get(complement)];
        }
        map.set(nums[i], i);
    }
};
// Key takeaway: forEach, map, filter, etc. can’t be used to “break” or “return” from the enclosing function — use a for / for...of loop if you need to exit early.
