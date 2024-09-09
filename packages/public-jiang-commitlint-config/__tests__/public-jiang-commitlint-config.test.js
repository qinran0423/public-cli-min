'use strict';

const publicJiangCommitlintConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(publicJiangCommitlintConfig(), 'Hello from publicJiangCommitlintConfig');
console.info('publicJiangCommitlintConfig tests passed');
