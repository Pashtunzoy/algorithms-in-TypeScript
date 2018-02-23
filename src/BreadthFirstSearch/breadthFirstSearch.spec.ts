import * as test from 'tape';
import breadthFirstSearch from './breadthFirstSearch';

test('Export a function', function (t) {
    t.equal(typeof breadthFirstSearch, 'function');
    t.end();
});