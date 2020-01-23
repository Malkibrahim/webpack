
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const merge =require('webpack-merge');
const common =require('./webpack.common');


module.exports = merge(common ,{
 
  output: {
    path: path.resolve(__dirname, 'built'),
    filename: '[name].bundle.js'
  },
  mode:"development",
  devtool: "source-map",
  plugins: [

    
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./favicon.ico",
    })
    
  ],
  module: {
    rules: [
      {
        test:/\.css$/,
        use:[
          "style-loader",
          "css-loader"
        ]
      },
      {
        test:/\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      
      {
          test: /\.(svg|gif|png|jpg|jpeg)$/,
          use: {
              loader: "file-loader",
              options: {
                  esModule: false,
                  name: "[name].[hash].[ext]",
                  outputPath: "assets"
                }
              }
            },
           
                          
        ],
       
  },
});