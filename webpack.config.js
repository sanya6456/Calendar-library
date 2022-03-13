const path = require('path');
const webpack = require('webpack');

module.exports = {
     entry: {
         index: './src/js/index.js',
         style: './src/css/main.scss'
     },
     output: {
         filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         library: {
             name: "NeoCalendar",
             type: "umd",
             export: "default"
         },
     },
     resolve: {
        extensions: ['.js', '.css', '.scss'],
        modules: [
          'node_modules'
        ]        
    },
     module: {
         rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    },
                    {
                    test: /\.scss$/,
                    use: [
                        {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
             }
         ],
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     mode: 'production'
 };