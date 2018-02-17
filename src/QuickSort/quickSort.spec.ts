import * as test from 'tape';
import quickSort from './quickSort';

test('Export a function', function (t) {
    t.equal(typeof quickSort, 'function');
    t.end();
});

test('Takes three arguments', function (t) {
    t.equal(quickSort.arguments, 3);
    t.end();
});