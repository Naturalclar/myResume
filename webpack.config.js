const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.tsx`,
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
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
        use: ['html-loader', 'markdown-loader'],
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
