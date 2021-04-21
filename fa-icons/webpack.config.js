const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./fontawesome.js",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
