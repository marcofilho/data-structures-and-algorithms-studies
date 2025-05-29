let phrase = "rat art";

function twoPointers(phrase) {
    let left = 0;
    let right = phrase.length - 1;

    while (left < right) {
        if (phrase[left] !== phrase[right]) {
            return false; 
        }
        left++;
        right--;
    }
    return true;
}