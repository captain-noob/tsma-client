var webpack = require("webpack");
var path = require("path");
const HtmlPlugin = require('html-webpack-plugin');
var parentDir = path.join(__dirname, "./");
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});


const VENDOR_MODULES = [
  "axios",
  "icepick",
  "lodash",
  "querystring",
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "react-router-redux",
  "react-select",
]

module.exports = {
  entry: {
   inertia: ['babel-polyfill', path.join(__dirname, "./index.js")],
   'startup.modules': VENDOR_MODULES,
  },
  devtool: 'source-map ./src',
  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader' },
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
        loaders: ["file-loader"],
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
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    alias: {
      img: path.join(__dirname, 'src/images'),
      //Templates: path.resolve(__dirname, 'src/templates/')
    },
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  },
  plugins: [
    new HtmlPlugin({
      title: 'Inertia client',
      template: parentDir+'/index.html',
      inject: true      
    }),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.DefinePlugin(envKeys)
  ],
  optimization: {
    minimize: true,
    runtimeChunk: {
      name: "manifest",
    },

    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    noEmitOnErrors: true,    
  },
};
