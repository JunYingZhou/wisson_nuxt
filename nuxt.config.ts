/*
 * @Author: zjy 3497577844@qq.com
 * @Date: 2024-08-06 21:51:35
 * @LastEditors: zjy 3497577844@qq.com
 * @LastEditTime: 2024-08-11 17:08:32
 * @FilePath: \my-app\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 是否开启SSR,默认开启
  // ssr: false,
  compatibilityDate: '2024-04-03',
  // 是否开启调试工具
  devtools: { enabled: true },

  // 移动端适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 875,
      },
    },
  },

  // 依赖
  modules: ["@vant/nuxt", '@pinia/nuxt'],

  // 配置全局路由守卫
  router: {
    middleware: ['auth']
  }
})
