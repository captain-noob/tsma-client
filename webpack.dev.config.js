var webpack = require("webpack");
var path = require("path");
const dotenv = require('dotenv');
var parentDir = path.join(__dirname, "./");

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: ['babel-polyfill',path.join(__dirname, "./index.js")],
  devtool: 'source-map ./src',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader", "less-loader"]
      },
      {
				test: /\.(css|scss)$/,
				loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loaders: ["url-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      images: path.join(__dirname, 'src/images'),
      //Templates: path.resolve(__dirname, 'src/templates/')
    }
  },
  node: {
    fs: "empty"
  },
  output: {
    path: parentDir + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
};
