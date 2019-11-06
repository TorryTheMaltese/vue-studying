const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',  // 배포 시 production
  devtool: 'eval',     // 배포 시 hidden-source-map
  resolve: {
    extensions: ['.js', '.vue']
  },
  entry: {
    app: path.join(__dirname, 'main.js')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].js', //app.js
    path: path.join(__dirname, 'dist')
  }
};
