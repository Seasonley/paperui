const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  node: {
    fs: "empty",
    path: "empty"
  },
  devtool: "inline-source-map",
  mode: "development",
  entry: {
    app: "./styles/_dev.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "dev css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.svg/,
        loader: "svg-url-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
