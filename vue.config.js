const path = require('path')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [
            path.resolve(__dirname, 'node_modules/@material'),
            path.resolve(__dirname, 'node_modules/vue-mdc-adapter')
          ]
        }
      ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        sourceMap: false,
        includePaths: [path.resolve(__dirname, 'node_modules')]
      }
    }
  }
}
