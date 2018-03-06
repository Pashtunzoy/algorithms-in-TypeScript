

export default class Dijkstra {

    // This method returns a vertex with the smallest value in the weights object
    private findSmallestNeighbour(weights: object, visited: string[]): string {
        let smallestWeight = Infinity;
        let smallestWeightVertex = null;
        for (let w in weights) {
            let weight = weights[w];
            if (weight < smallestWeight && !visited.includes(w)) {
                smallestWeight = weight;
                smallestWeightVertex = w;
            }
        }
        return smallestWeightVertex;
    }

    // The main method that returns the shortest paths and all paths from the starting posotion
    getShorterDistance(data: any, start: string, end: string = '') {

        // Putting some precaution for some edge cases
        if (!data || data.length < 2 || !start) {
            return 'Please insert the correct input value';
        }
        // parents will include the parents of all items and will be used for backtracking to find the path of a specific vertex
        const parents = {};

        // visited is initially empty but will include every node that is visited
        let visited: string[] = [];
        
        // Will include the weights of every item from the starting point
        const weights = {};

        // To formate data e.g. {vertex:{neighbours}, ...}
        const graph = {};

        // Fills the graph, parents and weights object
        for (let i = 0; i < data.length; i += 1) {
            graph[data[i].value] = data[i].neighbours;
            for (let n in data[i].neighbours) {
                if (data[i].value === start) {
                    weights[n] = data[i].neighbours[n];
                    parents[n] = data[i].value;
                } else if (!weights[data[i].value]) {
                    weights[data[i].value] = Infinity;
                }
            }
            weights[start] = 0;
            parents[end] = null;
        }

        // Will return the intial shortest value from the private method, to start the algorithm with
        console.log();
        
        let vertex = this.findSmallestNeighbour(weights, visited);

        // Searches through the weights and vertices and finds the new weights for each vertex if smaller than current weight
        while (vertex) {
            let weight = weights[vertex];
            let neighbours = graph[vertex];
            for (let n in neighbours) {
                let newWeight = weight + neighbours[n];
                if (weights[n] > newWeight) {
                    weights[n] = newWeight;
                    parents[n] = vertex;
                }
            }
            visited.push(vertex);
            vertex = this.findSmallestNeighbour(weights, visited);
        }

        parents[start] = null;

        // If end value exists then formate the return value to "start -> ... -> end"
        if (end) {
            console.log(weights);
            return this.generatePath(weights, parents, start, end);
        }

        // if no end then reuturn the all weights with their corrosponding values
        return weights;
    }

    private generatePath(weights, parents, start, end) {
        let finalPath = [];
        while (weights) {
            for (let i in weights) {
                if (i === end) {
                    finalPath.unshift(i);
                    end = parents[i];
                    delete weights[i];
                } else if (!end) {
                    break;
                }
            }
            if (finalPath.includes(start)) break;
        }
        return finalPath.slice().join(' -> ');
    }
}