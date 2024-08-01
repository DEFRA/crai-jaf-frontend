const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')

const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'

const govukFrontendPath = path.dirname(
  require.resolve('govuk-frontend/package.json')
)

module.exports = {
  entry: {
    core: {
      import: ['./app/frontend/js/index.js', './app/frontend/css/application.scss']
    },
    sortableTable: {
      import: ['./app/frontend/js/sortable-table.js']
    }
  },
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(?:s[ac]|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              esModule: false
            }
          },
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      }
    ]
  },
  output: {
    filename: 'js/[name].[fullhash].js',
    path: path.resolve(__dirname, 'app/dist'),
    library: '[name]'
  },
  resolve: {
    alias: {
      'dist/assets': path.join(govukFrontendPath, 'dist/govuk/assets')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackAssetsManifest(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(govukFrontendPath, 'dist/govuk/assets'),
          to: 'assets'
        },
        {
          from: 'app/frontend/images',
          to: 'assets/images'
        }
      ]
    })
  ]
}
