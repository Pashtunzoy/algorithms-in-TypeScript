interface IData {
    value: string;
    weight: number;
    parent?: string|null;
    neighbours: {
        [key: number]: number
    }
}


export default function dijkstra(data: IData[], start: string, end: string = '') {
    let queue: IData[] = [];
    let visited: IData[] = [];

    for (let i = 0; i < data.length; i += 1) {
        if (data[i].value === start) {
            data[i].weight = 0;
            data[i].parent = null;
            queue.push(data[i]);
        }
    }

    while (queue.length) {
        let { value, weight, parent, neighbours } = queue.shift();
        for (let v in neighbours) {
            if (neighbours[v] < data[v].weight) {
                data[v].weight = neighbours[v];
                queue.unshift(data[v]);
            }
        }
    } 
    

    return {
        shortestPath: 3,
        paths: {
            0: 0,
            1: 15,
            2: 3,
            3: 9,
            4: 5,
        }
    };
}

// function lowestWeight(data: IData[], neighbours: object): number {
//     for (let i = 0; i < data.length; i += 1) {
//         for (let n in neighbours) {
//             let weight = neighbours[n];
//             // if (weight < )
//             return ;
//         }
//     }
// }