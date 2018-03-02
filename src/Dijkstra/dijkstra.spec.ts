import * as test from 'tape';
import dijkstra from './dijkstra';

const setup = (): object => {
    const helper = {};
    helper['data'] = [
        {
            // 0
            value: "Dandenong",
            weight: Infinity,
            neighbours: {
                4: 5,
                2: 3,
            }
        },
        {
            // 15
            value: "Narre Warren",
            weight: Infinity,
            neighbours: {
                4: 9,
            }
        },
        {
            // 3
            value: "Noble Park",
            weight: Infinity,
            neighbours: {
                0: 3,
                3: 6
            }
        },
        {
            // 9
            value: "Springvale",
            weight: Infinity,
            neighbours: {
                2: 6,
            }
        },
        {
            // 5
            value: "Dovton",
            weight: Infinity,
            neighbours: {
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

test('By Providing the data and the starting point, it should return the shortest Path and also paths of all data', function (t) {
    const helper = setup();
    t.deepEqual(dijkstra(helper['data'], "Dandenong"), {
        shortestPath: 3,
        paths: {
            0: 0,
            1: 14,
            2: 3,
            3: 9,
            4: 5,
        }
    });
    teardown(helper);
    t.end();
});

test('By Providing the data and the starting point, it returns the shortest path to end point', function (t) {
    const helper = setup();
    t.deepEqual(dijkstra(helper['data'], "Dandenong", "Narre Warren"), "Dandenong -> Doveton -> Narre Warren");
    teardown(helper);
    t.end();
});