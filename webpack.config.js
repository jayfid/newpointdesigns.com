// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin({
      logo: "assets/logo.svg",
      outputPath: __dirname + "/dist/",
      prefix: "",
      mode: isProduction ? "webapp" : "light",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "assets/robots.txt",
          to: "robots.txt",
        },
        {
          from: "src/fonts/Lato-Regular.woff",
          to: "fonts/",
        },
        {
          from: "src/fonts/Lato-Regular.woff2",
          to: "fonts/",
        },
        {
          from: "src/fonts/Lato-Italic.woff",
          to: "fonts/",
        },
        {
          from: "src/fonts/Lato-Italic.woff2",
          to: "fonts/",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(sc|c)ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|ico|txt)$/i,
        type: "asset",
      },
      {
        test: /images\/taco\.png$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
