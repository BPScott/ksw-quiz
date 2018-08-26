const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
  // Use Preact instead of React
  // Use preact-compat because we want PropTypes warnings in dev.
  // Using Typescript for typechecking instead of PropTypes might mean we can
  // use preact instead of preact-compat here to save a few more kb
  config.resolve.alias = Object.assign(config.resolve.alias, {
    react: 'preact-compat',
    'react-dom': 'preact-compat',
  });

  // Strip prop-types from production build
  if (env === 'production') {
    config = injectBabelPlugin(
      ['babel-plugin-transform-react-remove-prop-types', {removeImport: true}],
      config
    );
  }

  return config;
};
