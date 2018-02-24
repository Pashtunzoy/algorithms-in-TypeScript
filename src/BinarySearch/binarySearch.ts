export default function binarySearch(arr: number[] | string[], item: number|string, low: any = 0, high: any = 0): null|number {
    if (arr.length < 2) {
        return null;
    }

    high = arr.length - 1;
    if (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];
       
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            arr.splice(mid, 1);
            return binarySearch(arr, item, low, mid - 1);     
        }
        arr.splice(mid, 1);
        return binarySearch(arr, item, mid + 1, high);
    }
    return null;
}