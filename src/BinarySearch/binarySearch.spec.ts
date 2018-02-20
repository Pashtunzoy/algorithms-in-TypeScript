import * as test from 'tape';
import binarySearch from './binarySearch';

const setup = (): object => {
    const helper = {};
    helper['array1'] = ['a', 'b', 'c', 'd'];
    helper['array2'] = [1, 2, 3, 4, 5, 6];
    return helper;
};

const teardown = (helper: object): void => {
   delete helper['array'];
};



test('BinarySearch exports a function', function (t) {
    t.equal(typeof binarySearch, 'function');
    t.end();
});

test('Takes two args, an array and an item and returns the index of item', function (t) {
    const helper = setup();
    t.equal(binarySearch(helper['array2'], 2), 1);
    teardown(helper); 
    t.end();
});

test('Will return null if no item is found', function (t) {
    const helper = setup();
    t.equal(binarySearch(helper['array1'], 'e'), null);
    teardown(helper);
    t.end();
});