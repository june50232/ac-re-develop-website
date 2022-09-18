// const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    loader: 'akamai',
    path: '${{ secrets.AWS_S3_DOMAIN }}',
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  output: 'standalone',
  assetPrefix: '.',
};
