const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of our application
  entry: "./src/index.tsx",

  // Development mode
  mode: "development",

  // Output directory and file name
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // Rules for how to handle different file types
  module: {
    rules: [
      {
        // Transpiling TypeScript and React code
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        use: "ts-loader",
      },
      {
        // Handling CSS files
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Development server options
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'}),
  ]
};
