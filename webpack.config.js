const path = require('path')

module.exports = {
  mode: "development",
  entry: "./example/src/index.tsx",
  output: {
    filename: "index.js",
    path: `${__dirname}/example/public`
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: "/node_modules/"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'example/public'),
    watchContentBase: true
  }
}
