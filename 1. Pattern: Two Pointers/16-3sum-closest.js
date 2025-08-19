/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (arr, target) {
    arr.sort((a, b) => a - b);
    let closeSum = Number.MAX_VALUE;
    const n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        let s = i + 1, e = n - 1;
        while (s < e) {
            let sum = arr[i] + arr[s] + arr[e];
            if (Math.abs(target - sum) < Math.abs(target - closeSum))
                closeSum = sum;
            if (sum < target) s++;
            else if (sum > target) e--;
            else return sum;
        }
    }
    return closeSum;
};
