'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    // staticHelpers: true,
    // staticModifiers: true,
    // staticComponents: true,
    staticEmberSource: true,
    packagerOptions: {
      // Toggle this to show xyz is NOT used on the woff2 link tag in index.html
      // publicAssetURL: 'xyz/',
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.woff2$/i,
              type: 'asset/resource',
              generator: {
                filename: '[path][name]-[hash][ext][query]',
              },
            },
          ],
        },
      },
    },
  });
};
