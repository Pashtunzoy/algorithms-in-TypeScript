import * as test from 'tape';
import quickSort from './quickSort';

test('Export a function', function (t) {
    t.equal(typeof quickSort, 'function');
    t.end();
});

test('Takes three arguments', function (t) {
    t.equal(quickSort.length, 3);
    t.end();
});

// test('Should return the array sorted', function (t) {
//     var array = [2, 3, 4, 5, 1, 6];
//     t.equal(quickSort(array, 2, 5), [1, 2, 3, 4, 5, 6]);
//     t.end();
// });