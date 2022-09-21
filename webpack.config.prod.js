const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx', 
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
        
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx|png|jpg)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        name: 'assets/images/[hash]-[name].[ext]'
                    } 
                }]
            }
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
          }),
          new CompressionPlugin({
            test: /\.(js|jsx|ts|tsx)(\?.*)?$/i,
          })
    ],
    performance: {
        hints: "warning",
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith(".tsx.gz");
        }
      },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              test: /node_modules\/.*/,
              name: "vendors",
              chunks: "all",
            }
          },
        },
        runtimeChunk: {
          name: "manifest",
        },
      }
    
};