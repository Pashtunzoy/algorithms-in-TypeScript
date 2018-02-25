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
            children: [1, 3, 4],
        }
    ];

    t.equal(breadthFirstSearch(data, "Dovton"), []);
    t.end();
});