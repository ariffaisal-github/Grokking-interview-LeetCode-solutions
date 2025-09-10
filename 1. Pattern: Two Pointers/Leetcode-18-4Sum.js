/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (arr, target) {
    arr.sort((a, b) => a - b)
    let res = [];
    let n = arr.length;

    for (let a = 0; a < n - 3; a++) {
        if (a > 0 && arr[a] === arr[a - 1]) continue;
        for (let b = a + 1; b < n - 2; b++) {
            if (b > a + 1 && arr[b] === arr[b - 1]) continue;
            // 2Sum on sorted
            let s = b + 1, e = n - 1;
            while (s < e) {
                let sum = arr[a] + arr[b] + arr[s] + arr[e];
                if (sum < target)
                    s++;
                else if (sum > target)
                    e--;
                else {
                    res.push([arr[a], arr[b], arr[s], arr[e]]);
                    while (s < e && arr[s] === arr[s + 1]) s++;
                    while (s < e && arr[e] === arr[e - 1]) e--;
                    s++;
                    e--;
                }
            }
        }
    }
    return res;
};
