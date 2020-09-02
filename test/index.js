const { describe } = require("mocha");

const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('webpack config test case', () => {
  // eslint-disable-next-line global-require
  require('./unit/webpack-base-config.js');
});
