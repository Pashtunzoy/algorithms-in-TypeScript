import * as test from 'tape';
import { selectionSort, smallestItem } from './selectionSort';

const setup = (): object => {
    const helper = {};
    helper['array1'] = ['b', 'a', 'd', 'c'];
    helper['array2'] = [5, 2, 6, 4, 1, 3];
    return helper;
};

const teardown = (helper): void => {
    for (let i of helper) {
        delete helper[i];
    }
};


test('SelectionSort Suite', function (t) {
    console.log(`SelectionSort Suite`);
    t.end();
});

test('SelectionSort exports a function', function(t) {
    t.equal(typeof selectionSort, 'function', 'selectionSort is a function');
    t.end();
});

test('smallestItem exports a function', function (t) {
    t.equal(typeof smallestItem, 'function', 'smallestItem is a function');
    t.end();
});

test('selectionSort takes an array arg and returns an array', function (t) {
    const helper = setup();
    t.deepEqual(selectionSort(helper['array2']), [1, 2, 3, 4, 5, 6]);
    teardown(helper);
    t.end();
});

test('smallestItem takes an array arg and returns an index', function (t) {
    const helper = setup();
    t.equal(smallestItem(helper['array2']), 4);
    teardown(helper);
    t.end();
});

test('selectionSort takes an array and returns a sorted array', function (t) {
    const helper = setup();
    t.deepEqual(selectionSort(helper['array1']), ['a', 'b', 'c', 'd']);
    teardown(helper);
    t.end();
});


