const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dev"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|png|jpg)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "assets/images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8003,
  },
};
