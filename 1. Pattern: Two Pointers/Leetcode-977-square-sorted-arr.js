/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let s = 0, e = nums.length - 1;
    let res = new Array(nums.length).fill(0)
    let resIdx = nums.length-1
    while (s <= e) {
        if (Math.abs(nums[s]) > Math.abs(nums[e])) {
            res[resIdx--] = (nums[s] * nums[s])
            s++
        } else {
            res[resIdx--] = (nums[e] * nums[e])
            e--
        }
    }
    return res
};
