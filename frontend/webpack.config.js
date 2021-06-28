const path = require("path");
const webpack = require("webpack");
var BundleTracker = require('webpack-bundle-tracker');



module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },

      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader" 
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        loader: "babel-loader",   // определяем загрузчик
        options:{
            presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
        }
    }
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};