const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'standalone',
  // assetPrefix: '/ac-re-develop-website',
  env: {
    apiDomain: 'https://ac-re-api.onrender.com/',
    // apiDomain: 'http://localhost:8080/',
  },
  basePath: isProd ? '/ac-re-develop-website' : '',
  images: {
    unoptimized: true
  },
};
