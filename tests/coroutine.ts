import * as test from "test";
import { describe, beforeEach, after, afterEach, assert, xit, it, oit, before } from "test";
test.setup();

describe('test', () => {
    before(() => {
        // setup before the whole test
    });

    beforeEach(() => {
        // setup before each test
    });

    after(() => {
        // cleanup after the whole test
    });

    afterEach(() => {
        // cleanup after each test
    });

    it('case', () => {
        assert.ok(true);
    });

    // ignored test case
    xit('case', () => {
        assert.ok(true);
    });

    // ignored test case
    // it.skip('case', () => {
    //     assert.ok(true);
    // });

    // only test case
    oit('case', () => {
        assert.ok(true);
    });

    // only test case
    // it.only('case', () => {
    //     assert.ok(true);
    // });
});

// async function test
describe('test async', () => {
    it('pass case', async () => {
        assert.ok(true);
    });

    it('error case', async () => {
        throw new Error('some thing wrong!');
    });
});

// callback function test
// cannot use callback mode in jsc
describe('test callback', () => {
    it('pass case', done => {
        setTimeout(() => {
            assert.ok(true);
            done();
        }, 0);
    });

    it('error case', done => {
        setTimeout(() => {
            done(new Error('some thing wrong!'));
        }, 0);
    });
});

// process.exit(-test.run(console.DEBUG));