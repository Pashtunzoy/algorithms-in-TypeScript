class Dijkstra {

    private findLowestNeighbour(costs: object, visited: any[]) {
        let lowestCost = Infinity;
        let lowestCostNode = null;
        for (let n in costs) {
            let cost = costs[n];
            if (cost < lowestCost && visited.includes(n)) {
                lowestCost = cost;
                lowestCostNode = n;
            }
        }
        return lowestCostNode;
    }

    getShorterDistance(data: any[], start: string, end: string) {
        let parents: object;
        let visited: string[];
        let costs: object;
        let graph: object;
        for (let i = 0; i < data.length; i += 1) {
            console.log(data[i]);
            // console.log(data[i].neighbours);
            graph[data[i].value] = data[i].neighbours;
            if (data[i].value === end) {
                for (let n in data[i].neighbours) {
                    costs[n] = data[i].neighbours[n];
                    parents[n] = start;
                }
                costs[end] = Infinity;
                parents[end] = null;
            }
        }

        let node = this.findLowestNeighbour(costs, visited);
        while (node) {
            let cost = costs[node];
            let neighbours = graph[node];
            for (let n in neighbours) {
                let newCost = cost + neighbours[n];
                if (cost[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
            }
            visited.push(node);
            node = this.findLowestNeighbour(data, visited);
        }
        return parents;
    }
}

const data = [
    {
        // 0
        value: "Dandenong",
        weight: 0,
        neighbours: {
            "Doveton": 5,
            "Noble Park": 3,
        }
    },
    {
        // 15
        value: "Narre Warren",
        weight: 0,
        neighbours: {
            "Doveton": 9,
        }
    },
    {
        // 3
        value: "Noble Park",
        weight: 0,
        neighbours: {
            "Dandenong": 3,
            "Springvale": 6
        }
    },
    {
        // 9
        value: "Springvale",
        weight: 0,
        neighbours: {
            "Noble Park": 6,
        }
    },
    {
        // 5
        value: "Doveton",
        weight: 0,
        neighbours: {
            "Dandneong": 5,
            "Narre Warren": 9,
        }
    }
];

const test = new Dijkstra();
// console.log(test.getShorterDistance(data, "Dandenong", "Narre Warren"));
console.log(test.getShorterDistance(data, "Dandenong", "Narre Warren"));

