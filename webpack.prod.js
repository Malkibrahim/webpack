
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');
const merge =require('webpack-merge');
const common =require('./webpack.common');

module.exports = merge(common,{
 
  output: {
    path: path.resolve(__dirname, 'built'),
    filename: '[name].[contentHash].bundle.js'
  },
  mode:"production",
  plugins: [

    
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })
    
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'],
        },
     
     
            {
              test: /\.(svg|gif|png|jpg|jpeg)$/,
              use: [{
                loader: "url-loader",
                options: {
                  esModule: false,
                  limit:40000,
                }
                
              },
              "image-webpack-loader"
              
            ]
            
            
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
            
          },
          
          
        ],
        optimization:{
          minimizer:[
            new optimizeCssAssetsPlugin (),
            new terserPlugin(),
            new HtmlWebpackPlugin({
              template: "./index.html",
              favicon: "./favicon.ico",
              minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true,
                removeComments:true
              }
            }),
          ]
    }
  },
});