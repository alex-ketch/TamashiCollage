var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';

var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name:      'main', // Move dependencies to our main file
        children:  true, // Look for common dependencies in all children,
        minChunks: 2, // How many times a dependency must come up before being extracted
    }),
];

if (production) {
  plugins = plugins.concat([
    // This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    new webpack.optimize.DedupePlugin(),

    // This plugins optimizes chunks and modules by
    // how much they are used in your app
    new webpack.optimize.OccurenceOrderPlugin(),

    // This plugin prevents Webpack from creating chunks
    // that would be too small to be worth loading separately
    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 51200, // ~50kb
    }),

    // This plugin minifies all the Javascript code of the final bundle
    new webpack.optimize.UglifyJsPlugin({
      mangle:   true,
      compress: {
        warnings: false, // Suppress uglification warnings
      },
    }),

    // This plugins defines various variables that we can set to false
    // in production to avoid code related to them from being compiled
    // in our final bundle
    new webpack.DefinePlugin({
      __SERVER__:      !production,
      __DEVELOPMENT__: !production,
      __DEVTOOLS__:    !production,
      'process.env':   {
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]);
}

module.exports = {
  debug:   !production,
  devtool: production ? false : 'eval',
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
  plugins: plugins,
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
