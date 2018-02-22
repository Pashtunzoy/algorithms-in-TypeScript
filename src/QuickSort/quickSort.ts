export default function quickSort(arr: any[]): any[] {
    if(arr.length < 2) {
        return arr;
    } else {
        let low = [];
        let high = [];
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] < arr[0]) low.push(arr[i]);
            if(arr[i] >= arr[0]) high.push(arr[i]);
        }
    }
    return quickSort(low).concat(arr[0], quickSort(high));
}