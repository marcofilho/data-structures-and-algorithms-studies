function binarySearch(numbers, target) {
    let low = 0;
    let high = numbers.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (numbers[mid] === target) {
            return mid;
        } else if (numbers[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        return -1;
    }
}

function exponentialSearch(numbers, target) {
    if (numbers[0] === target) {
        return 0;
    }

    let i = 1;
    while (i < numbers.length && numbers[i] <= target) {
        i *= 2;
    }

    return binarySearch(numbers.slice(Math.floor(i / 2), Math.min(i, numbers.length)), target);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = exponentialSearch(numbers, 5);
console.log(target);