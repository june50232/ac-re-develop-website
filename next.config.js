module.exports = {
  output: 'standalone',
  // assetPrefix: '/ac-re-develop-website',
  env: {
    s3Domain: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
    apiDomain: 'https://ac-re-api.onrender.com/',
  },
  basePath: '',
  images: {
    loader: 'akamai',
    path: 'https://acre-website.s3.ap-northeast-1.amazonaws.com',
  },
};
