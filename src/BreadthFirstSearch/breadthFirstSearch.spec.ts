import * as test from 'tape';
import breadthFirstSearch from './breadthFirstSearch';

const setup = (): object => {
    const helper = {};
    helper['data'] = [
        {
            value: "Dandenong",
            children: [4, 2],
        },
        {
            value: "Narre Warren",
            children: []
        },
        {
            value: "Noble Park",
            children: [3]
        },
        {
            value: "Springvale",
            children: []
        },
        {
            value: "Dovton",
            children: [1]
        }
    ];
    return helper;
};

const teardown = (helper): void => {
    for (let i of helper) {
        delete helper[i];
    }
};

test('Breadth First Search Suite', function (t) {
    console.log('Breadth First Search Suite');
    t.end();
});


test('Export a function', function (t) {
    t.equal(typeof breadthFirstSearch, 'function');
    t.end();
});

test('Return the correct path as array value for the searched term', function (t) {
    const helper = setup();
    t.equal(breadthFirstSearch(helper['data'], "Dandenong", "Narre Warren"), "Dandenong --> Dovton --> Narre Warren");
    teardown(helper);
    t.end();
});


test('Returns an error when departure is same as destination', function (t) {
    const helper = setup();
    t.equal(breadthFirstSearch(helper['data'], "Dandenong", "Dandenong"), "Your departing location cannot be same as the destination");
    teardown(helper);
    t.end();
});