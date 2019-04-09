#!/bin/sh

# usage:
# ./test-generator.sh 20 https://leetcode.com/problems/valid-parentheses/ isValid

# Commandline parameters.
PROBLEM_ORDER_NUM=$1
PROBLEM_URL=$2
FUNCTION_NAME=$3

# A simple template.
cat << EOF
const assert = require('assert');
const _$PROBLEM_ORDER_NUM = require('../$PROBLEM_ORDER_NUM');

describe('#$PROBLEM_ORDER_NUM $PROBLEM_URL', function () {
  describe('$FUNCTION_NAME', function () {
    it('should just works', function () {
      assert.equal(true, true);
    });
  });
});
EOF
