interface DataItem {
        parentNode?: number|null;
        value: string;
        children: number[];
        visited?: boolean;
}
interface DataItems extends Array<DataItem>{};

export default function breadFirstSearch(data: DataItems, from: string, to: string) {
    let searched: string[];
    let finalResult: object[];
    let queue = [];
    for (let i = 0, len = data.length; i < len; i += 1) {
        if (data[i].value === from) {
            data[i]['visited'] = true;
            data[i]['parentNode'] = null;
            queue.push(data[i]);
        }
        data[i]['visited'] = false;
        data[i]['parentNode'] = null;
    }
    for(let i = 0; i < queue.length; i += 1) {
        let v = queue.pop();
        if (v.value === to) {
            finalResult.push(v.value);
        } else if (!v.visited && v.children) {
            console.log('here', v.children);
            queue.concat(v.children);
        }
    }
    return finalResult;
}

// const data = [
//     {
//         value: "Dandenong",
//         children: [4, 2],
//     },
//     {
//         value: "Narre Warren",
//         children: []
//     },
//     {
//         value: "Noble Park",
//         children: [3]
//     },
//     {
//         value: "Springvale",
//         children: []
//     },
//     {
//         value: "Dovton",
//         children: [1]
//     }
// ];
// breadFirstSearch(data, "Dandenong", "Narre Warren")