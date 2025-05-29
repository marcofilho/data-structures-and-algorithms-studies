let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var target = binarySearch(numbers, 5);
console.log(target);

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