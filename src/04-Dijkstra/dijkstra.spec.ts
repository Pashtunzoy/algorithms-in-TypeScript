import * as test from 'tape';
import dijkstra from './dijkstra';

const setup = (): object => {
    const helper = {};
    helper['data'] = [
        {
            // 0
            value: "Dandenong",
            neighbours: [4, 2],
            weights: {
                2: 3,
                4: 5,
            }
        },
        {
            // 15
            value: "Narre Warren",
            neighbours: [4],
            weights: {
                4: 9,
            }
        },
        {
            // 3
            value: "Noble Park",
            neighbours: [0, 3],
            weights: {
                0: 3,
                3: 6,
            }
        },
        {
            // 9
            value: "Springvale",
            neighbours: [2],
            weights: {
                2: 6,
            }
        },
        {
            // 5
            value: "Dovton",
            neighbours: [0, 1],
            weights: {
                0: 5,
                1: 9,
            }
        }
    ];
    return helper;
};

const teardown = (helper): void => {
    for (let i of helper) {
        delete helper[i];
    }
};

test('Dijkstra Suite', function(t) {
    console.log('Dijkstra Suite');
    t.end();
});


test('Exported Dijkstra module is a function', function (t) {
    t.equal(typeof dijkstra, 'function');
    t.end();
});

test('By Providing the data and the starting point, it returns the shortest path to every point', function (t) {
    const helper = setup();
    t.deepEqual(dijkstra(helper['data'], "Dandenong"), {
        shortestPath: 3,
        paths: {
            0: 0,
            1: 15,
            2: 3,
            3: 9,
            4: 5,
        }
    });
    teardown(helper);
    t.end();
});