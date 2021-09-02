// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const CopyPlugin = require("copy-webpack-plugin");
const S3Plugin = require("webpack-s3-plugin");
var AWS = require("aws-sdk");

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
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HtmlWebpackPartialsPlugin({
      path: "./src/partials/google_analytics.html",
      location: "head",
    }),
    new HtmlWebpackPartialsPlugin({
      path: "./src/partials/content.html",
      location: "body",
    }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin({
      logo: "assets/logo.png",
      outputPath: __dirname + "/dist/",
    }),
    new CopyPlugin({
      patterns: [{ from: "assets/robots.txt", to: "robots.txt" }],
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
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|ico|txt)$/i,
        type: "asset",
      },
      {
        test: /images\/taco\.png$/i,
        type: "asset/resource",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(
      new S3Plugin({
        include: /dist\/.*/,
        s3Options: {
          credentials: new AWS.SharedIniFileCredentials({ profile: "default" }),
        },
        s3UploadOptions: {
          Bucket: "www.newpointdesigns.com",
        },
        cloudfrontInvalidateOptions: {
          DistributionId: "E1V20TH9YDWKSV",
          Items: ["/*"],
        },
        cdnizerOptions: {
          defaultCDNBase: "https://www.newpointdesigns.com",
        },
      })
    );
  } else {
    config.mode = "development";
  }
  return config;
};
