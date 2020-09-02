const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms',
});

process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
  const prodConfig = require('../../compile/webpack.prod.config');

  webpack(prodConfig, (err, stats) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      process.exit(2);
    }
    // eslint-disable-next-line no-console
    console.log(stats.toString({
      color: true,
      modules: false,
      children: false,
    }));

    // eslint-disable-next-line no-console
    console.log('webpack is success, begine run test.');

    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
