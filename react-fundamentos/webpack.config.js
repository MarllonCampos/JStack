const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle[fullhash].js",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  mode:'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test:/\.jsx?$/, 
        exclude:/node_modules/, 
        use:'babel-loader' 
      },
      {
        test:/\.s?css$/,
        use:['style-loader','css-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  devServer:{
    port:3000
  }
};
