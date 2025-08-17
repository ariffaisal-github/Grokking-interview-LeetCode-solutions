/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a,b)=>a-b);   // Must do this
    const res = new Array()
    for (let i = 0; i < nums.length; i++) {
        if(i>0 && nums[i]===nums[i-1]) continue;
        const target = -nums[i];
        let s = i + 1, e = nums.length - 1;
        while (s < e) {
            let sum = nums[s] + nums[e];
            if (sum < target) s++;
            else if (sum > target) e--;
            else {
                res.push(new Array(nums[i], nums[s], nums[e]))
                while(s<e && nums[s]===nums[s+1]) s++;
                while(s<e && nums[e]===nums[e-1]) e--;
                s++
                e--
            }
        }
    }
    return res
};
