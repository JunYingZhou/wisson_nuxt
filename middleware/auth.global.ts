export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = userSetUpStore();

  // 打印路由信息
  console.log("Navigating to:", to, "From:", from.fullPath);

  // 是否需要认证
  const needAuth = to.meta.authRequired;

  console.log("是否需要验证：", needAuth, "用户是否登录：", userStore.getAuth);

  // 判断是否需要认证
  if (needAuth) {
    // 如果用户未登录，则重定向到登录页面
    if (!userStore.getAuth) {
      return navigateTo('/login');
    }
  } else {
    // 如果用户已登录并试图访问需要认证的页面
    if (userStore.getAuth && to.path === '/login') {
      return navigateTo('/');
    }
  }
});
