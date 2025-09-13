/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (arr) {
    let s = 0, e = arr.length - 1;
    if (arr.length === 1) return 0;
    while (s + 1 < arr.length && arr[s] <= arr[s + 1])
        s++;
    if (s === arr.length - 1) return 0; // already sorted
    while (e >= 1 && arr[e] >= arr[e - 1])
        e--;
    // Find min and max inside SubArray[s...e]
    let min = Infinity, max = -Infinity;
    for (let i = s; i <= e; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
    // update s if arr[i]>min from loop s-1 to 0 (left of subArr)
    for (let i = s - 1; i >= 0; i--) {
        if (arr[i] > min) s = i;
    }
    // update e from right of subArr
    for (let i = e + 1; i < arr.length; i++) {
        if (arr[i] < max) e = i;
    }
  /*
    Or, while (s > 0 && arr[s - 1] > min) s--;
        while (e < n - 1 && arr[e + 1] < max) e++;
  */

    return e - s + 1;
};
