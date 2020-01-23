
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './App/index.js',
 
  devtool: "source-map",
  plugins: [

    new CleanWebpackPlugin({
      exclude: "index.html"
    }),
   
    
  ],
  module: {
    rules: [
     
     
      {
        test: /\.ts$/,
        use: "ts-loader"
      }, {
        test: /\.html$/,
        use: "html-loader"
      },
      
           
                          
        ],
       
  },
};