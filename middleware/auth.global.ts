import {useUserInfoStore} from "~/stores/modules/useUserStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userInfoStore = useUserInfoStore();

  // 打印路由信息
  console.log("Navigating to:", to, "From:", from.fullPath);

  // 是否需要认证
  const needAuth = to.meta.authRequired;
  // const token = localStorage.getItem("token");

  console.log("是否需要验证：", needAuth, "用户是否登录：", userInfoStore.getToken,"localStroage:");


  // 判断是否需要认证
  if (needAuth) {
    // 如果用户未登录，则重定向到登录页面
    if (!(userInfoStore.getToken)) {
      return navigateTo('/login');
    }
  } else {
    // 如果用户已登录并试图访问需要认证的页面
    if ((userInfoStore.getToken) && to.path === '/login') {
      return navigateTo('/');
    }
  }
});
