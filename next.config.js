module.exports = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  assetPrefix: ".",
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  output: 'standalone',
};
