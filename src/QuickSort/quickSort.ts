export default function quickSort(arr: any[]): any[] {
    if(arr.length < 2) {
        return arr;
    }
    let low = [];
    let high = [];
    let pivot = Math.floor((arr.length-1)/2);
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i] !== arr[pivot]) {
            if (arr[i] < arr[pivot]) low.push(arr[i]);
            if(arr[i] >= arr[pivot]) high.push(arr[i]);
        }
    }
    return quickSort(low).concat(arr[pivot], quickSort(high));
}

