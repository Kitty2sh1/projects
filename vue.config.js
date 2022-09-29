const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 是否自动打开浏览器
    open: true,
    // 是否开启https
    https: false,
    // 主机名
    host: "localhost",
    proxy: {
      '/api': {
        target: 'http://119.45.133.128:8089',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ""
        }
      }
    }
  }
})
