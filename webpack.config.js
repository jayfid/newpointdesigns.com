// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from "path";
import process from "process";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlInlineScriptPlugin from "html-inline-script-webpack-plugin";

const __dirname = import.meta.dirname;
const isProduction = process.env.NODE_ENV == "production";

const config = {
  mode: isProduction ? "production" : "development",
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
    new HtmlInlineScriptPlugin(),
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/i,
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

export default () => {
  return config;
};
