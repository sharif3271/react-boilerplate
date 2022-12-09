const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const isDev = process.env.Node_ENV === 'development';

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };
  if (!isDev) {
    config.minimizer = [
      new CssMinimizer(),
      new Terser()
    ];
  }
  return config;
};

const cssLoaders = extra => {
  const loaders = [
    isDev ? 'style-loader':
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false
          },
        },
    {
      loader: 'css-loader',
      options: {
        esModule: false,
        sourceMap: isDev,
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: isDev,
        postcssOptions: {
          plugins: [
            require("postcss-import"),
            require('tailwindcss/nesting'),
            require("tailwindcss"),
            require("autoprefixer"),
          ]
        }
      },
    },
  ];
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.tsx'
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.ts', '.tsx', '.png', '.json', '.svg'],
    mainFiles: ['index'],
    plugins: [new TsconfigPathsPlugin()],
    fallback: {
      'fs': false,
    },
  },
  optimization: optimization(),
  devServer: {
    static: 'dist',
    port: 8000,
    historyApiFallback: true,
    hot: isDev
  },
  devtool: isDev ? 'eval-nosources-cheap-module-source-map' : false,
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: cssLoaders()
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource'
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './assets/images/favicon.ico',
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new TSLintPlugin({
      files: ['./src/**/*.ts', './src/**/*.tsx']
    }),
    new Dotenv(),
    new webpack.IgnorePlugin({
      contextRegExp: /^\.\/locale$/,
      resourceRegExp: /moment$/
    }),
  ]
};
