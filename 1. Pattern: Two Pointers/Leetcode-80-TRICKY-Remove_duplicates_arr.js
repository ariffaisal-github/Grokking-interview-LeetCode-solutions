/**
 * @param {number[]} arr
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // if (nums.length <= 2) return nums.length; // no need this check
    
    let write = 2; // index where we can write the next allowed element
    
    for (let read = 2; read < nums.length; read++) {
        // Only copy nums[read] if it's not equal to nums[write - 2]
        if (nums[read] !== nums[write - 2]) {
            nums[write] = nums[read];
            write++;
        }
    }
    
    return write; // length of array without extra duplicates
};
