module.exports = function babel(api) {
  const presets = [
    '@babel/preset-env',
    ['@babel/preset-react', { development: !api.env('production'), runtime: 'automatic' }],
  ];
  const plugins = [];
  if (api.env('development')) {
    plugins.push('react-refresh/babel');
  }
  return {
    presets,
    plugins,
  };
};
