import { assert } from "chai";
import { describe, it } from "mocha";

import { likes } from "../who_likes_this";

describe('static tests', function () {
    it('should return correct text', function () {
        assert.equal(likes([]), 'no one likes this');
        assert.equal(likes(['Peter']), 'Peter likes this');
        assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
        assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
        assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
});
