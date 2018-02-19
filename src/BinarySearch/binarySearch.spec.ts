import * as test from 'tape';
import binarySearch from './binarySearch';

test('BinarySearch exports a function', function (t) {
    t.equal(typeof binarySearch, 'function');
    t.end();
});

test('Takes two args, an array and an item and returns the index of item', function (t) {
    t.equal(binarySearch([1, 2, 3, 4, 5], 2), 1);
    t.end();
});

test('Will return null if no item is found', function (t) {
    t.equal(binarySearch(['a', 'b', 'c', 'd'], 'e'), null);
    t.end();
});