const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const getAddons = (addonsArgs) => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map((name) => require(`./add-ons/webpack.${name}`)); // eslint-disable-line global-require, import/no-dynamic-require
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`); // eslint-disable-line global-require, import/no-dynamic-require

  return merge(commonConfig, envConfig, ...getAddons(addon));
};
