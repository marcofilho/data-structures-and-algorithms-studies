function maximumLengthSubstring(s) {
    let l = 0, r = 0;
    let _max = 1;
    let counter = {};

    counter[s[0]] = 1;

    while (r < s.length - 1) {
        r += 1;
        if (counter[s[r]]) {
            counter[s[r]] += 1;
        } else {
            counter[s[r]] = 1;
        }

        while (counter[s[r]] === 3) {
            counter[s[l]] -= 1;
            l += 1;
        }
        _max = Math.max(_max, r - l + 1);
    }
    return _max;
}

let letters = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];
console.log(maximumLengthSubstring(letters)); 