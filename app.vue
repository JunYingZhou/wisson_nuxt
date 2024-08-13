<!--
 * @Author: zjy 3497577844@qq.com
 * @Date: 2024-08-06 21:51:35
 * @LastEditors: zjy 3497577844@qq.com
 * @LastEditTime: 2024-08-10 17:39:30
 * @FilePath: \my-app\app.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">


// 配置seo,浏览器引擎优化
import {userSetUpStore} from "~/composables";
import Index from "./pages/index/index.vue";

useSeoMeta({
  // 配置网页标题
  title: 'Wisson自动充电机器人',
  // 配置网页描述
  description: '自动充电机器人',
  // 配置网页关键词
  keywords: '自动充电机器人,机器人,充电机器人,万勋',
})

const store = userSetUpStore();
const isAuth = store.getAuth;

</script>


<template>
<!--  &lt;!&ndash;  <div>&ndash;&gt;-->
<!--  &lt;!&ndash;    <NuxtRouteAnnouncer />&ndash;&gt;-->
<!--  &lt;!&ndash;    <NuxtWelcome />&ndash;&gt;-->
<!--  &lt;!&ndash;    <P>欢迎使用Wisson自动充电机器人</P>&ndash;&gt;-->
<!--  &lt;!&ndash;  </div>&ndash;&gt;-->
<!--  &lt;!&ndash;  相当于vue当中的App.vue,React当中的App.js，angular当中的AppComponent.ts 首页：index/index.html&ndash;&gt;-->
<!--  &lt;!&ndash;  相当于vue当中的RouterLink,React当中的Link，angular当中的<a>&ndash;&gt;-->
<!--  <NuxtLink to="/">首页</NuxtLink>-->
<!--  &lt;!&ndash;    <NuxtLink to="/video">视频</NuxtLink>&ndash;&gt;-->
<!--  &lt;!&ndash;  基于文件路由，根据文件自动生成路由，一般要放在pages当中，文件名/index.vue&ndash;&gt;-->


<!--  &lt;!&ndash;  相当于vue当中的RouteView,React当中的<Outlet/>，angular当中的<router-outlet/>&ndash;&gt;-->
<!--  <NuxtPage/>-->
    <!-- <div>
      <template v-if="isAuth">
        <Index/>
      </template>
      <template v-else>
        <div>
          <p>请先登录</p>
          <NuxtLink to="/login">登录</NuxtLink>
        </div>
      </template>
    </div> -->
    <NuxtPage />
</template>

<style lang="scss">
// 导入全局样式
@import "assets/styles/base.scss";
@import "assets/styles/iconfont.scss";

:root {
  //修改主题颜色
  --van-primary-color: #FFC20A !important;
}
</style>
