const isProd = process.env.NODE_ENV === 'production';
const awss3 = process.env.AWS_S3

module.exports = {
  images: {
    loader: 'akamai',
    path: awss3,
  },
  output: 'standalone',
  // assetPrefix: '/ac-re-develop-website',
  env: {
    s3domain: awss3,
  },
  basePath: isProd ? '/dev' : '',
};
