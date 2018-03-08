import * as test from 'tape';
import approximAlgorithm from './aprroximAlgorithm';

test('Aprroximation Algorithm Suite', function (t) {
    console.log('Aprroximation Algorithm Suite');
    t.end();
});


test('Exported approximAlgorithm module is a function', function (t) {
    t.equal(typeof approximAlgorithm, 'function');
    t.end();
});

test('approximAlgorithm returns something', function (t) {
    t.ok(approximAlgorithm());
    t.end();
});

