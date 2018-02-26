import * as test from 'tape';
import breadthFirstSearch from './breadthFirstSearch';

test('Export a function', function (t) {
    t.equal(typeof breadthFirstSearch, 'function');
    t.end();
});


test('Return the correct path as array value for the searched term', function (t) {
    const data = [
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

    t.equal(breadthFirstSearch(data, "Dandenong", "Narre Warren"), ["Dandenong", "Doveton", "Narre Warren"]);
    t.end();
});