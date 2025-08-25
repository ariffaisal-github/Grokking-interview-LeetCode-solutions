
var singleNumber = function (nums) {
    let ans =0 ;
    for (let bitIdx = 0; bitIdx < 32; bitIdx++) {
        let cnt = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] & (1 << bitIdx)) 
                cnt++;
        }
        if(cnt%3 !== 0)
            ans = ans|(1<<bitIdx);
    }
    return ans;
};
