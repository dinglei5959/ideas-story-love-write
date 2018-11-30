const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
 
 const sassResourceLoader = {
  //增加全局变量 resources
  loader: 'sass-resources-loader',
  options: {
    // Or array of paths
    resources: [
      resolve('src/styles/variable.scss'),
      resolve('src/styles/mixins.scss')
    ]
  }
}

const alias = {
  '@': resolve('src'),
  '@md':resolve('src/markdown'),
  '@assets': resolve('src/assets'),
  '@components': resolve('src/components'),
  '@lib': resolve('src/lib'),
  '@pages': resolve('src/pages'),
  '@router': resolve('src/router')
}

module.exports = {
  sassResourceLoader,
  alias
}