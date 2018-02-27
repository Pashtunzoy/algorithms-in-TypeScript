import * as test from 'tape';
import breadthFirstSearch from './breadthFirstSearch';

const setup = (): object => {
    const helper = {};
    helper.data = [
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

const teardown = (helper: object): void => {
    delete helper.data;
};


test('Export a function', function (t) {
    t.equal(typeof breadthFirstSearch, 'function');
    t.end();
});

test('Return the correct path as array value for the searched term', function (t) {
    const helper = setup();
    t.equal(breadthFirstSearch(helper.data, "Dandenong", "Narre Warren"), "Dandenong --> Dovton --> Narre Warren");
    teardown(helper);
    t.end();
});


test('Showed throw an error when departure is same as destination', function (t) {
    const helper = setup();
    t.throws(breadthFirstSearch(helper.data, "Dandenong", "Dandenong"), "Your departing location cannot be same as the destination");
    teardown(helper);
    t.end();
});