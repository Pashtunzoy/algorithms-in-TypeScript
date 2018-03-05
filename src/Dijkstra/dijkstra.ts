// interface IDijkstra {
//     findLowestNeighbour:
// }

class Dijkstra {
    private findLowestNeighbour(costs: object, visited: any[]) {
        let lowestCost = Infinity;
        let lowestCostNode = null;
        for (let n in costs) {
            let cost = costs[n];
            if (cost < lowestCost && !visited.includes(n)) {
                // console.log(cost, visited);
                lowestCost = cost;
                lowestCostNode = n;
            }
        }
        return lowestCostNode;
    }

    getShorterDistance() {
        let parents: object = { "a": "start", 'b': 'start', "end": '' };
        let visited: string[] = [];
        let costs: object = { 'a': 6, 'b': 2, 'end': Infinity };
        let graph: object = {
            'start': {
                'a': 6,
                'b': 2
            },
            'a': {
                'end': 1
            },
            'b': {
                'a': 3,
                'end': 5
            },
            'end': {}
        };
        // for (let i = 0; i < data.length; i += 1) {
        //     if (data[i].value === end) {
        //         for (let n in data[i].neighbours) {
        //             costs[n] = data[i].neighbours[n];
        //             parents[n] = start;
        //         }
        //         costs[end] = 0;
        //         parents[end] = null;
        //         graph[data[i].value] = data[i].neighbours;
        //     }
        //     graph[data[i].value] = data[i].neighbours;
        // }

        // console.log(graph);
        // console.log(parents);
        // console.log(costs);


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
            node = this.findLowestNeighbour(costs, visited);
        }
        console.log('After Operation');
        // console.log(graph);
        console.log(costs);
        // console.log(costs);
        // console.log(visited);
        return visited;
    }
}


const data = {
    // 0
    "Dandenong": {
        "Doveton": 5,
        "Noble Park": 3,
    },
    // 15
    "Narre Warren": {
        "Doveton": 9,
    },
    // 3
    "Noble Park": {
        "Dandenong": 3,
        "Springvale": 6
    },
    // 9
    "Springvale": {
        "Noble Park": 6,
    },
    // 5
    "Doveton": {
        "Dandneong": 5,
        "Narre Warren": 9,
    }
};

// dijkstra(data, "Narre Warren", "Springvale");
const test = new Dijkstra();
// console.log(test.getShorterDistance(data, "Dandenong", "Narre Warren"));
test.getShorterDistance();
