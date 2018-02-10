const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader?name=./[name].[ext]',
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Resume',
      template: 'src/index.html',
    }),
  ],
};
