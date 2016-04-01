module.exports = {
  entry: './src/js/app',
  resolve: {
    extensions: ['', '.html', '.js', '.json', '.scss', '.css'],
    alias: {
      minicolors_css: __dirname + '/node_modules/jquery-minicolors/jquery.minicolors.css',
      remodal_css: __dirname + '/node_modules/remodal/dist/remodal.css',
      remodal_theme: __dirname + '/node_modules/remodal/dist/remodal.css'
    }
  },
  output: {
      path: __dirname + '/src',
      filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader'},
      { test: /\.css$/, loader: 'css-loader'},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'src/',
    hot: true
  }
};
