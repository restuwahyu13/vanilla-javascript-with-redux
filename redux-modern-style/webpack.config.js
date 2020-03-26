const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {

  entry: './src/',
  output: {

    path: path.resolve( __dirname, '/dist' ),
    filename: 'index.js'
  },
  module: {

    rules: [ {

      test: '\/.js$/',
      loader: 'babel-loader',
      exclude: '/(node_modules)/',
      query: {
        presets: 'babel-presets-env'
      }
    }, {

       test: '\/.html$/',
       loader: 'html-loader',
       exclude: '/(node_modules)/',
    } ]
  },
  plugins: [ new HtmlWebpackPlugin({template: './src/index.html', filename: 'index.html'}) ]
}