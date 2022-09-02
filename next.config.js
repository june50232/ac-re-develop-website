module.exports = {
  images: {
    loader: 'akamai',
    path: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
  },
  assetPrefix: '.',
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  output: 'standalone',
};
