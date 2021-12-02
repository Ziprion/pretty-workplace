import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const mode = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === 'development';

const babelLoaders = () => {
  const loaders = ['babel-loader'];

  if (!isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

export default {
  target: isDev ? 'web' : 'browserslist',
  mode,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(dirname, 'src/components'),
      hooks: path.resolve(dirname, 'src/hooks'),
      pages: path.resolve(dirname, 'src/pages'),
      connectors: path.resolve(dirname, 'src/connectors'),
      'redux-store': path.resolve(dirname, 'src/redux-store'),
      'api-effects': path.resolve(dirname, 'src/api-effects'),
      utils: path.resolve(dirname, 'src/utils'),
      locales: path.resolve(dirname, 'src/locales'),
      style: path.resolve(dirname, 'src/style'),
      'data-connectors': path.resolve(dirname, 'src/data-connectors'),
      constants: path.resolve(dirname, 'src/constants'),
    },
  },
  output: {
    path: path.join(dirname, 'dist'),
    filename: isDev ? 'main.js' : 'main.[contenthash:8].js',
    publicPath: '/',
    clean: true,
  },
  devServer: {
    open: true,
    compress: true,
    port: process.env.CLIENT_PORT,
    historyApiFallback: true,
    contentBase: path.join(dirname, 'assets'),
    watchContentBase: isDev,
    proxy: {
      '/api': {
        target: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}`,
      },
    },
  },
  devtool: isDev ? 'source-map' : undefined,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pretty Workplace',
      template: path.join(dirname, 'src/template/index.pug'),
      favicon: './assets/images/icons/favicon.png',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(dirname, 'assets/images'),
          to: path.resolve(dirname, 'dist/images'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.jsx?$/,
        resolve: {
          fullySpecified: false,
        },
        exclude: /node_modules/,
        use: babelLoaders(),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/icons/',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
};
