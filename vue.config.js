const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 80,
    https: false,
    open:false,
    hot:true
  }
})
