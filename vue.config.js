const path = require('path')

module.exports = {
  // chainWebpack: config => {
  //   config.module
  //     .rule('babel')
  //     // .test(/\.js$/)
  //     .include
  //     .add(path.resolve(__dirname, 'node_modules/@material'))
  //     // .end()
  //     // .use('babel-loader')
  //     // .use('babel-loader')
  //     // .tap(options =>
  //     //   merge(options, {
  //     //     includePaths: [
  //     //       path.resolve(__dirname, 'node_modules/@material')/*,
  //     //       path.resolve(__dirname, 'node_modules/vue-mdc-adapter')*/
  //     //     ]
  //     //   })
  //     // )
  // }
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
        // {
        //   loader: 'sass-loader',
        //   options: {
        //     sourceMap: false,
        //     includePaths: [path.resolve(__dirname, 'node_modules')]
        //   }
        // }
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
