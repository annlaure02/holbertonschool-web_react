const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['./modules/header/header.js', './modules/body/body.js', './modules/footer/footer.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ]
      }
    ]
  },
  devServer: {
    contentBase: './public',
    port: 8564,
  },
  mode: 'development',
};