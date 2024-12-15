const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Use 'production' for production builds
  entry: "./src/index.js", // Entry file for your app
  output: {
    filename: "bundle.js", // Bundled file
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Cleans up the output directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // Example: Load CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from 'dist' directory
    },
    port: 8080, // Default port for the server
    open: true, // Automatically open the browser
    compress: true, // Enable gzip compression
    hot: true, // Enable Hot Module Replacement
  },
};
