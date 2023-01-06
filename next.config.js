const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'standalone',
  // assetPrefix: '/ac-re-develop-website',
  env: {
    s3Domain: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
    apiDomain: 'https://ac-re-api.onrender.com/',
    // apiDomain: 'http://localhost:8080/',
  },
  basePath: isProd ? '/ac-re-develop-website' : '',
  images: {
    loader: 'akamai',
    path: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
  },
};
