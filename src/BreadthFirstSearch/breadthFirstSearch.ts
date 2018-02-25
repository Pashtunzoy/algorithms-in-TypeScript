interface DataItem {
        parentNode?: number;
        value: string;
        children: number[];
}
interface DataItems extends Array<DataItem>{};

export default function breadFirstSearch(data: DataItems, term: string) {
    let alreadySearched: string[];
    let finalResult: object[];
    let queue = [];
    for (let i = 0, len = data.length; i < len; i += 1) {
        // TODO
    }
    return finalResult.length > 1 ? finalResult : finalResult[0];
}