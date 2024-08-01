const path = require('path')
const nunjucks = require('nunjucks')
const pkg = require('../../package.json')
const { readFileSync } = require('fs')

const manifestPath = path.join(__dirname, '../dist/assets-manifest.json')

const context = () => {
  const manifest = JSON.parse(readFileSync(manifestPath))

  return {
    appVersion: pkg.version,
    serviceName: 'JAF Analysis Tool',
    pageTitle: 'JAF Analysis Tool',
    assetBasePath: '/static',
    getAssetPath: (asset) => {
      return `/static/${manifest[asset]}`
    }
  }
}

module.exports = {
  plugin: require('@hapi/vision'),
  options: {
    engines: {
      njk: {
        compile: (src, options) => {
          const template = nunjucks.compile(src, options.environment)

          return (context) => {
            return template.render(context)
          }
        },
        prepare: (options, next) => {
          options.compileOptions.environment = nunjucks.configure(
            [
              path.join(options.relativeTo || process.cwd(), options.path),
              'node_modules/govuk-frontend/dist/'
            ],
            {
              autoescape: true
            }
          )

          return next()
        }
      }
    },
    path: '../views',
    relativeTo: __dirname,
    context
  }
}
