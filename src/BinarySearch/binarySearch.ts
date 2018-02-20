export default function binarySearch(arr: number[] | string[], item: number|string): null|number {
    let low = 0;
    let high: number = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];
        if (guess === item) {
            return mid;
        } else if (guess > item && arr.length > 1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}