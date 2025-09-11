/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let i = s.length - 1, j = t.length - 1;
    let skipS = 0, skipT = 0;

    while (i >= 0 || j >= 0) {
        // Move i to the next valid char in s
        while (i >= 0) {
            if (s[i] === '#') { skipS++; i--; }
            else if (skipS > 0) { skipS--; i--; }
            else break;
        }

        // Move j to the next valid char in t
        while (j >= 0) {
            if (t[j] === '#') { skipT++; j--; }
            else if (skipT > 0) { skipT--; j--; }
            else break;
        }

        // Compare current characters
        let sc = i >= 0 ? s[i] : null;
        let tc = j >= 0 ? t[j] : null;
        if (sc !== tc) return false;

        i--;
        j--;
    }

    return true;
};
