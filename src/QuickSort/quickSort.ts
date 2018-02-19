export default function quickSort(array: any[], low: any, high: any): any[] {
    let pivot: any = array[high];
    if (low < pivot) {
        return pivot;
    }
    return array;
}