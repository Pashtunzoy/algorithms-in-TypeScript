import * as test from 'tape';
import greedyAlgorithm from './greedyAlgorithm';

test('Greedy Algorithm Suite', function (t) {
    console.log('Greedy Algorithm Suite');
    t.end();
});


test('Exported GreedyAlgorithm module is a function', function (t) {
    t.equal(typeof greedyAlgorithm, 'function');
    t.end();
});

test('GreedyAlgorithm returns something', function (t) {
    t.ok(greedyAlgorithm());
    t.end();
});

