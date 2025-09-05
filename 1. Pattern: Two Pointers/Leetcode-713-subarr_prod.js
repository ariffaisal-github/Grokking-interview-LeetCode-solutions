/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0; //must
    let prod = 1, cnt = 0, L = 0;
    for (let R = 0; R < nums.length; R++) {
        prod *= nums[R];
        while (prod >= k) {
            prod /= nums[L];
            L++;
        }
        cnt += R - L + 1;
    }
    return cnt;
};
