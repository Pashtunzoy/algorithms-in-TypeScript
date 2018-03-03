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
    let visited: string[] = [];
    let paths: object = {};

    for (let i = 0; i < data.length; i += 1) {
        if (data[i].value === start) {
            data[i].weight = null;
            data[i].parent = null;
            visited.push(data[i].value);
            queue.push(data[i]);
        }
    }

    while (queue.length) {
        let { value, weight: parentWeight = 0, parent, neighbours } = queue.shift();
        let sortedNeighbours = [];
        let lowestWeight = 0;
        visited.push(value);
        for (let v in neighbours) {
            if (!visited.includes(data[v].value)) {
                let weight = neighbours[v];
                if (weight < lowestWeight && weight < data[v].weight) {
                    data[v].weight = weight + parentWeight;
                    lowestWeight = weight;
                    data[v].parent = value;
                    sortedNeighbours.unshift(data[v]);
                } else if (weight > lowestWeight && weight < data[v].weight) {
                    data[v].weight = weight + parentWeight;
                    data[v].parent = value;
                    sortedNeighbours.push(data[v]);
                } else if (weight > data[v].weight) {
                    sortedNeighbours.push(data[v]);
                }
            }
        }
        queue.push(...sortedNeighbours); 
    } 
    
    if (end) {
        let finalPath = [];
        let oldEnd = end;
        for ( let i = 0; i < data.length; i += 1) {
            if (data[i].parent) {
                if (end === data[i].value && data[i].parent) {
                    end = data[i].parent;
                    if (oldEnd !== end && end !== start) {
                        finalPath.push(end);
                    }
                }
            }
        }
        finalPath.push(oldEnd);
        finalPath.unshift(start);
        console.log(finalPath.slice().join(' -> '));
        return finalPath.slice().join(' -> ');
    } else {
        let shortestPath = Infinity;
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].weight && data[i].weight < shortestPath) {
                shortestPath = data[i].weight;
            }
            paths[i] = data[i].weight || 0;
        }
        return {shortestPath, paths}; 
    }
}
