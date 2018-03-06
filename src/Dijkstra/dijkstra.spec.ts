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

test('Return a message istead of the desired result, if incorrect values are passed to the Dijksra algorithm', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance([], "Narre Warren", "Dandenong"), 'Please insert the correct input value');
    teardown(helper);
    t.end();
});

test('By Providing the data and a start and an end point, it returns a string with formate of start -> ... -> end', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance(helper['data'], "Dandenong", "Narre Warren"), "Dandenong -> Doveton -> Narre Warren");
    teardown(helper);
    t.end();
});

test('By Providing the data and a start point, it should return all possible paths from the start value', function (t) {
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

test('Providing "Springvale" as start and "Narre Warren" as end, it returns a string with formate of "Springvale -> ... -> Narre Warren"', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance(helper['data'], "Springvale", "Narre Warren"), "Springvale -> Noble Park -> Dandenong -> Doveton -> Narre Warren");
    teardown(helper);
    t.end();
});

test('Providing "Narre Warren" as start and "Dandenong" as end, it returns a string with formate of "Narre Warren -> ... -> Dandenong"', function (t) {
    const helper = setup();
    t.deepEqual(helper['dijkstra'].getShorterDistance(helper['data'], "Narre Warren", "Dandenong"), "Narre Warren -> Doveton -> Dandenong");
    teardown(helper);
    t.end();
});