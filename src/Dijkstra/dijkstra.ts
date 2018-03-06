interface IDijkstra {
    getShorterDistance(data: object[], start: string, end?: string): string | object;
}
/**
 * The main implemantation of the algorithm in the form of the new class style. It returns either a key-value pair of each vertex's wieght from the point of view of the start element
 * 
 * @export
 * @class Dijkstra
 * @implements {IDijkstra} the interface which includes the only public method
 */
export default class Dijkstra implements IDijkstra {

    /**
     * This method returns a vertex with the smallest value in the weights object
     * 
     * @private
     * @param {object} weights - Key-value pair object, it includes the weights of vertex as neighbours of the current vertex
     * @param {string[]} visited - Array of all the keys who has been traversed 
     * @returns {string} - Returns the node key that has the smallest weight of weights object
     * @memberof Dijkstra
     */
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

    /**
     * The main method that returns the shortest paths and all paths from the starting posotion
     * 
     * @param {*} data - An array with objects with {vertex: {neighbours: weights}}
     * @param {string} start - This is the starting key from where we begin our search
     * @param {string} [end=''] - The end param is optional but if present, if present it will return string, instead of object with key-value pair.
     * @returns {(string | object)} - If end is present then it return string in the formate of start -> ... -> end and if not then will return an object with calculated distances from the start point of view. 
     * @memberof Dijkstra
     */
    getShorterDistance(data: any, start: string, end: string = ''): string | object {

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
/**
 * Will generate a path if the end value exist and is called form the getShortDistance method
 * 
 * @private
 * @param {any} weights - Includes all of the waits the getShorterDistance method calculated based on the start value
 * @param {any} parents - The parents of each vertex in key-value pair formate
 * @param {any} start - This is the start key from where the weights and parents object are generated
 * @param {any} end - This whole method is run becaus of the end value, if it is present we will return a stirng. 
 * @returns {string} - The string returning will be the same as the return string value of getShorterDistance method as it return there after it has been calculated in here.
 * @memberof Dijkstra
 */
private generatePath(weights, parents, start, end): string {
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