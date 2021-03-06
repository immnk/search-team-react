const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const packageRoot = process.cwd();
// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(path.resolve(__dirname, 'package.json'));
const revision = require('child_process')
  .execSync('git log -n 1 --pretty=format:"%H"')
  .toString()
  .trim();

const banner = `
    Package: ${packageJson.name} v${packageJson.version}
    File name: [base]
    Generated on: ${new Date(Date.now()).toLocaleString()} 
    Commit hash: ${revision}`;

// eslint-disable-next-line max-lines-per-function
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: ['react-hot-loader/patch', './src'],
    output: {
      path: path.resolve(packageRoot, 'build'),
      filename: '[name].js',
      chunkFilename: '[name]-[hash:8].js',
      publicPath: isProd ? 'https://immnk.github.io/search-team-react/' : '/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [packageRoot, 'node_modules'],
      alias: {
        store: path.resolve(packageRoot, 'src/store'),
        components: path.resolve(packageRoot, 'src/components'),
        pages: path.resolve(packageRoot, 'src/pages'),
        utils: path.resolve(packageRoot, 'src/utils'),
        'react-dom': '@hot-loader/react-dom'
      }
    },
    module: {
      rules: [
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: 'upward',
                cacheDirectory: true
              }
            },
            isProd
              ? false
              : {
                  loader: 'eslint-loader',
                  options: {
                    emitWarning: true
                  }
                }
          ].filter(Boolean)
        },
        {
          test: /\.css$/,
          include: /src/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]-[local]-[hash:8]'
                }
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          exclude: /src/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]-[local]-[hash:8]'
                }
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /(\.gif|\.jpe?g|\.png|\.svg)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash:8].[ext]',
                outputPath: './static/images'
              }
            }
          ]
        }
      ]
    },
    target: 'web',
    optimization: {
      minimize: isProd,
      minimizer: ['...', new CssMinimizerPlugin()]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new ProgressBarPlugin({ clear: false }),
      new HtmlWebpackPlugin({
        cache: true,
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
        filename: './index.html',
        now: new Date().toISOString(),
        title: `${packageJson.description}`,
        package: `${packageJson.name} v${packageJson.version}`,
        PUBLIC_URL: 'https://immnk.github.io/search-team-react'
      }),
      new CopyPlugin({
        patterns: ['public/manifest.json', 'public/icon-192x192.png', 'public/robots.txt']
      }),
      new webpack.BannerPlugin(banner),
      new webpack.ids.HashedModuleIdsPlugin({
        context: __dirname,
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 8
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build/'),
      port: 3000,
      hotOnly: true
    },
    devtool: isProd ? false : 'cheap-module-source-map',
    performance: {
      hints: false
    },
    stats: 'minimal'
  };
};
