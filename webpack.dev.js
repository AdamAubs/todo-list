//  Specific to the development environment.

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", // Better source maps for debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve files from 'dist'
    },
    port: 8080,
    open: true,
    compress: true,
    hot: true,
  },
});
