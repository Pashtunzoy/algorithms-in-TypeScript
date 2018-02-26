import * as test from 'tape';
import dijkstra from './dijkstra';

test('Exported Dijkstra module is a function', function (t) {
    t.equal(typeof dijkstra, 'function');
    t.end();
});