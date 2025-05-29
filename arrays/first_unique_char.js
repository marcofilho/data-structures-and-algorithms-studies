let firstUniqChar = function(s) {
    let d = {};
    for (let idx = 0; idx < s.length; idx++) {
        let ch = s[idx];
        if (!d[ch]) {
            d[ch] = [idx, 1];
        } else {
            d[ch][1] += 1;
        }
    }

    for (let ch in d) {
        if (d[ch][1] === 1) {
            return d[ch][0];
        }
    }

    return -1;
}
console.log(firstUniqChar("leetcode"));