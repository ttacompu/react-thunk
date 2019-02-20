var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const merge = require("webpack-merge");


module.exports = env =>{
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(scss|css)$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test : /\.(eot|ttf|svg|png|gif|woff2)$/,
            use : [
                'file-loader'
            ]
           }
          
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({ 
          template: './src/index.html', 
          filename: './index.html' 
        }),
        new webpack.DefinePlugin({ 
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        }),
        new CopyWebpackPlugin([ { from: 'src/static' } ]), // Add this in the plugins section

      ]
  
    }
  ]);
}