import * as test from 'tape';
import Dijkstra from './dijkstra';

const setup = (): object => {
    const helper = {};
    helper['data'] = [
        {
            // 0
            value: "Dandenong",
            neighbours: {
                "Doveton": 5,
                "Noble Park": 3,
            }
        },
        {
            // 14
            value: "Narre Warren",
            neighbours: {
                "Doveton": 9,
            }
        },
        {
            // 3
            value: "Noble Park",
            neighbours: {
                "Dandenong": 3,
                "Springvale": 6
            }
        },
        {
            // 9
            value: "Springvale",
            neighbours: {
                "Noble Park": 6,
            }
        },
        {
            // 5
            value: "Doveton",
            neighbours: {
                "Dandenong": 5,
                "Narre Warren": 9,
            }
        }
    ];
    helper["dijkstra"] = new Dijkstra();
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


test('Exported Dijkstra module is an function object', function (t) {
    t.equal(typeof Dijkstra, 'function');
    t.end();
});

test('By Providing the data and the starting point, it returns the shortest path to end point', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance(helper['data'], "Dandenong", "Narre Warren"), "Dandenong -> Doveton -> Narre Warren");
    teardown(helper);
    t.end();
});

test('By Providing the data and the starting point, it should return the shortest Path and also paths of all data', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance(helper['data'], "Dandenong"), {
        'Doveton': 5,
        'Noble Park': 3,
        'Dandenong': 0,
        'Narre Warren': 14,
        'Springvale': 9
    });
    teardown(helper);
    t.end();
});

test('By Providing the data and the starting point, it returns the shortest path to end point', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance(helper['data'], "Springvale", "Narre Warren"), "Springvale -> Noble Park -> Dandenong -> Doveton -> Narre Warren");
    teardown(helper);
    t.end();
});

test('By Providing the data and the starting point, it returns the shortest path to end point last one', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance(helper['data'], "Narre Warren", "Dandenong"), "Narre Warren -> Doveton -> Dandenong");
    teardown(helper);
    t.end();
});

test('Return a message if incorrect values are passed to the Dijksra algorithm', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance([], "Narre Warren", "Dandenong"), 'Please insert the correct input value');
    teardown(helper);
    t.end();
});