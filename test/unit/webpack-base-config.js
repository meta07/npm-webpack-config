/* eslint-disable global-require */
const { describe, it } = require("mocha");

const assert = require('assert');

describe('webpack-base-config.js test case', () => {
  const baseConfig = require('../../compile/webpack.base.config');
  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/meta/MetaProject/npm-webpack-config/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/meta/MetaProject/npm-webpack-config/test/smoke/template/src/search/index.js');
  });
});
