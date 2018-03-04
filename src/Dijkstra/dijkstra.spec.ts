import * as test from 'tape';
import dijkstra from './dijkstra';

const setup = (): object => {
    const helper = {};
    helper['data'] = [
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

// test('By Providing the data and the starting point, it should return the shortest Path and also paths of all data', function (t) {
//     const helper = setup();
//     t.deepEqual(dijkstra(helper['data'], "Dandenong"), {
//         shortestPath: 3,
//         paths: {
//             0: 0,
//             1: 14,
//             2: 3,
//             3: 9,
//             4: 5,
//         }
//     });
//     teardown(helper);
//     t.end();
// });

test('By Providing the data and the starting point, it returns the shortest path to end point', function (t) {
    const helper = setup();
    t.deepEqual(dijkstra(helper['data'], "Dandenong", "Narre Warren"), "Dandenong -> Doveton -> Narre Warren");
    teardown(helper);
    t.end();
});

test('By Providing the data and the starting point, it returns the shortest path to end point', function (t) {
    const helper = setup();
    t.deepEqual(dijkstra(helper['data'], "Springvale", "Narre Warren"), "Springvale -> Noble Park -> Dandenong -> Doveton -> Narre Warren");
    teardown(helper);
    t.end();
});

test('By Providing the data and the starting point, it returns the shortest path to end point', function (t) {
    const helper = setup();
    t.deepEqual(dijkstra(helper['data'], "Narre Warren", "Dandenong"), "Narre Warren -> Doveton -> Dandenong");
    teardown(helper);
    t.end();
});