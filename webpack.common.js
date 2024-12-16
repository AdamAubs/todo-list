//  This file contains shared configuration for both development and production.

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Shared entry file
  output: {
    filename: "[name].bundle.js", // Chunk names
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the 'dist' folder before builds
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Shared HTML template
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // Shared CSS rule
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
