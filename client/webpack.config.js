const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const {GenerateSW} = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // TODO: Add the correct output
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, "dist")
    },

    // TODO: Add the correct plugins
    plugins: [
     new HtmlWebpackPlugin({
      template: "./index.html"
     }),
     new GenerateSW(),
     new WebpackPwaManifest({
      name: "Content Directory",
      short_name: 'Directory',
      description: 'My awesome Progressive Web App!',
      background_color: '#ff0000',
      start_url: './',
      icons: [
        {
          src: path.resolve('./assets/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
     })
    ],

    // TODO: Add the correct modules
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    }
  };
};
