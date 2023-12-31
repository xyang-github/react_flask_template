const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/Index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "../static",
    filename: "index.[contenthash].js",
    clean: true,
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [require("react-refresh/babel")],
              presets: ["@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        loader: "file-loader",

        options: {
          name: "[name].[ext]",
          outputPath: "../../static/dist",
        },
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: [
            {
              source: "../backend/app/template/index.html",
              options: {
                force: true,
              },
            },
            {
              source: "../backend/app/static/",
              options: {
                force: true,
              },
            },
          ],
          mkdir: ["../backend/app/static/"],
        },
        onEnd: {
          copy: [
            {
              source: "./dist/index.html",
              destination: "../backend/app/templates/index.html",
            },
            {
              source: "./dist/*.js",
              destination: "../backend/app/static/",
            },
          ],
        },
      },
    }),
    new HTMLWebpackPlugin({
      template: "./static/index.html",
      inject: "body",
      filename: "index.html",
    }),
  ],
  devServer: {
    hot: true,
    port: 4000,
    proxy: {
      "/": {
        target: "http://localhost:3000",
      },
      "/websocket": {
        target: "ws://localhost:3000",
      },
      "/autoreload": {
        target: "ws://localhost:3000",
        ws: true,
      },
    },
  },
};
