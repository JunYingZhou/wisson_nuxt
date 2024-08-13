<!--
 * @Author: zjy 3497577844@qq.com
 * @Date: 2024-08-10 00:24:50
 * @LastEditors: zjy 3497577844@qq.com
 * @LastEditTime: 2024-08-11 16:27:07
 * @FilePath: \my-app\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
const { $axios } = useNuxtApp();

const router = useRouter();

// State definitions
const message = ref<string | null>(null);
const count = ref<number>(0);
const auth = ref<boolean>(false);

// Store initialization
const store = userSetUpStore()
auth.value = store.getAuth;


definePageMeta({
  // middleware: 'auth'
  title: '首页',
  authRequired: true
})

// Fetch data and count on mounted
onMounted(async () => {


  try {
    // Fetch data
    const { data, error } = await useFetch('http://localhost:8989/api/getData', {
      lazy: true,
      method: 'GET',
      server: false
    });
    if (error.value) {
      console.error("获取数据时出错", error.value);
    } else {
      message.value = data.value;
    }

    // Fetch count and set up refresh
    const { data: countData, error: countError, refresh } = await useFetch('http://localhost:8989/api/getCountAdd', {
      watch: [count]
    });
    if (countError.value) {
      console.error("获取计数时出错", countError.value);
    } else {
      count.value = countData.value.data.count;
    }

    // Expose refresh function for the template
    return { refresh };
  } catch (error) {
    console.error("获取数据时出错", error);
  }
});

// Method to add count
const countAdd = () => {
  count.value++;
};

const toLogin = () => {
  router.push('/login')
  // navigateTo('/login');
}



// 进行axios的请求权限
const fetchUser = async () => {
  try {
    const response = await $axios.get('/getData');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


</script>

<template>
  <div>
    <h1>首页</h1>
    <h1>欢迎回来</h1>
    <!-- 跳转路由到video,传参 -->
    <van-button type="primary" @click="router.push(`/video/${1}`)">跳转到视频(路径传参)</van-button>
    <br>
    <van-button type="primary" @click="router.push({ path: '/my', params: { id: 2 } })">跳转到我的</van-button>
    <br>
    <van-button type="primary" @click="fetchUser">axios请求验证</van-button>
  </div>
</template>

<style scoped>
/* Add any scoped styles here */
</style>
