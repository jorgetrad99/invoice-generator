const path = require('path');
/* const HtmlWebpackPlugin = require('html-webpack-plugin'); */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        /* use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ], */
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets/icons'),
          to: 'assets/icons',
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
    }),
  ],
};
