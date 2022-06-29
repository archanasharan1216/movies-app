const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.tsx', 
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
        
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
            // {
            //     test: /\.(jpg|png)$/,
            //     loader: 'file-loader',
               
            //     // options: {
            //     //     outputPath: '/assets/images',
            //     //     name: '[name].[ext]',
            //     //     url: true,
            //     //     publicPath: './assets/images/',
            //     // }
            //   },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            //   },
            // {
            //     test: /\.(jpg|png)$/,
            //     use: {
            //       loader: 'url-loader',
            //     },
            //   },

            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        //limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'assets/images/[hash]-[name].[ext]'
                    } 
                }]
            },
           
                // {
                //     test: /\.(png|jpg|jpeg|gif)$/i,
                //     type: 'asset/resource',
                //     generator: {
                //         filename: '[name][ext]'
                //     }
                // },

                // {
                //     test: /\.(png|j?g|svg|gif)?$/,
                //     use: 'file-loader?name=./assets/images/[name].[ext]'
                //    }
                // {
                //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
                //     type: 'asset/resource',
                //   },
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
          })
    ],
    
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          port: 8009,
    }
    
};