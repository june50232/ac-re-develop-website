const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'standalone',
  // assetPrefix: '/ac-re-develop-website',
  env: {
    s3Domain: process.env.AWS_S3,
    apiDomain: process.env.API_DOMAIN,
  },
  basePath: isProd ? '/dev' : '',
  images: {
    loader: 'akamai',
    path: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
  },
};
