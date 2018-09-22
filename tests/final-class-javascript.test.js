var assert = require('assert');

class example {
    constructor() {
        if (this.constructor !== example) {
            throw new Error("Example is a final class. Cannot be extended.");
        } else {
            this.val;
        }
    }

    get(){
        return this.val;
    }

    set(v) {
        this.val = v;
    }
}

class extendedExample extends example {
    constructor() {
        super();
    }
}

describe('final class in javascript', function() {
    it('is instantiable', function() {
        var x = new example();
        assert.equal(!!x, true);
    });
    it('is not extendable', function() {
        assert.throws(() => { var x = new extendedExample(); }, Error);
    });
});