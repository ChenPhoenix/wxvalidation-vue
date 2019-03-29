module.exports = {
  //代理接口地址
  proxyList: {
    '/api': {
      target: 'http://apiweb-it.ninebot.cn', // 无痕验证接口的域名
      // secure: false,  // 如果是https接口，需要配置这个参数
      changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      pathRewrite: {
        '^/api': '/'
      }
    },
    // '/porxy': {
    //   target: 'http://adminsystem.ninebot.cn', // 微信防伪码接口的域名
    //   // secure: false,  // 如果是https接口，需要配置这个参数
    //   changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    //   pathRewrite: {
    //     '^/porxy': ''
    //   }
    // },
    // '/porxyb': {
    //   target: 'http://testwebit.ninebot.cn', // 无痕验证接口的域名
    //   // secure: false,  // 如果是https接口，需要配置这个参数
    //   changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    //   pathRewrite: {
    //     '^/porxyb': ''
    //   }
    // },

  },
}
