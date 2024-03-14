require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

const config = {};
const basePath = isProd ? '/YOUR_PATH_HERE' : '';

config.publicRuntimeConfig = {
  BASE_PATH: basePath,
};

config.assetPrefix = basePath;

module.exports = config;
