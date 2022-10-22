const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    loader: 'akamai',
    path: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
  },
  output: 'standalone',
  // assetPrefix: '/ac-re-develop-website',
  env: {
    s3domain: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
  },
  basePath: isProd ? '/ac-re-develop-website' : '',
};
