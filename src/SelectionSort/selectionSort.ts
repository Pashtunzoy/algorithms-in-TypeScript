export function selectionSort(arr: number[] | string[]): number[] | string[] {
    let newArray = [];
    let smallest;
    let el;
    for (let i = 0, len = arr.length; i < len; i += 1) {
        smallest = smallestItem(arr);
        el = arr.splice(smallest, 1)[0];
        newArray.push(el);
    }
    return newArray;
};

export function smallestItem(arr: number[] | string[]): number {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}