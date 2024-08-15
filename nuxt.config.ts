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

  plugins: [{ src: "~/plugins/datav.ts", mode: "client" }],
  // 依赖
  modules: ["@vant/nuxt", '@pinia/nuxt'],

  // 配置全局路由守卫
  router: {
    middleware: ['auth']
  }
})
