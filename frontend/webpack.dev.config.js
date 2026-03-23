const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')

// Any directories you will be adding code/files into, need to
//  be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, 'src')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('@tailwindcss/postcss'), require('autoprefixer')]
              }
            }
          }
        ],
        include: defaultInclude
      },
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        include: defaultInclude
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]__[hash:base64:5][ext]'
        },
        include: defaultInclude
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]__[hash:base64:5][ext]',
        },
        include: defaultInclude,
      },
      {
        test: /\.(mp4|m4v|webm|ogg)$/i,
        use: {
          loader: 'file-loader',
          options: { name: 'assets/media/[name].[hash].[ext]' }
        }
      }
    ]
  },
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/video'), to: 'assets/video' }
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    client: {
      logging: 'info',
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      spawn('electron', ['.'], {
        shell: true,
        env: process.env,
        stdio: 'inherit'
      })
        .on('close', () => process.exit(0))
        .on('error', err => console.error(err));

      return middlewares;
    },
  }
}
