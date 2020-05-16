// webpack v4
const path = require('path');

const OUTDIR = '/app';
const OUTDIR_ = '.' + OUTDIR;

module.exports = {
  target: "web", //"node",
  entry: {
    app: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, OUTDIR_),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, OUTDIR_),
    hot: true,
    overlay: true,
    stats: 'errors-only',
    disableHostCheck: true,
  },
  externals:{
    "fs": "commonjs fs"
  },
}
