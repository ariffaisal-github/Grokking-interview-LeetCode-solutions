/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    const n = arr.length;
    //count zeros
    let zerosCount = 0;
    for (let num of arr) {
        if (num === 0) zerosCount++;
    }

    for (let prevPos = n - 1, newPos = n - 1 + zerosCount; prevPos >= 0; prevPos--, newPos--) {
        if (newPos <= n - 1) {
            arr[newPos] = arr[prevPos];
        }
        if (arr[prevPos] === 0) {
            newPos--;
            if (newPos <= n - 1)
                arr[newPos] = 0
        }
    }
};
