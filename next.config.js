const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    loader: 'akamai',
    path: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  output: 'standalone',
  assetPrefix: isProd ? '/public' : '.',
};
