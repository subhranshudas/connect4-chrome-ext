const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          globOptions: {
            ignore: ["**/index.html"],
          },
          noErrorOnMissing: true,
        },
        { from: "manifest.json", to: "." },
        { from: "icons", to: "." }, // Add this line to copy icon files
      ],
    }),
  ],
  stats: {
    errorDetails: true,
    children: true,
    chunks: true,
    modules: true,
    reasons: true,
    assets: true,
    source: true,
    errors: true,
    errorStack: true,
    warnings: true,
    publicPath: true,
  },
};
