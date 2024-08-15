<script setup lang="ts">

import {useUserInfoStore} from "~/stores/modules/useUserStore";

const userStore = useUserInfoStore();

</script>

<template>
  <div class="navi-top">
    <img class="logoImage" src="/assets/images/logo.png" alt="logo" />
<!--    <lazy-nuxt-img src="/assets/images/logo.png" alt="logo" />-->
    <p>Wisson自动充电机器人监控大屏</p>

    <div class="navi-user-bottom">
      <img src="/assets/images/userHead.png" class = "userHead" alt="userHead"/>
      <van-button class = "btn-user-login" type="primary" v-if="!userStore.getToken">Login</van-button>
      <van-button class = "btn-user-login" type="primary" v-if="userStore.getToken">Logout</van-button>
    </div>
  </div>
</template>

<style scoped>

p{
  font-size: 15px;
  text-align: center;
  font-width: 500px;
  color: #eca011;
}

.navi-top {
  display: flex;
  flex-direction: row;
  background-color: #133c9a;
  height: 30px;
  line-height: 30px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .logoImage{
    height: 20px;
    width: 80px;
    margin: 0 10px;
  }

  .navi-user-bottom{
    margin: 0 20px;
  }

  .userHead{
    height: 15px;
    width: 15px;
    margin: 0 10px;
  }
}

.btn-user-login{
  font-size: 5px;
  height: 15px;
  width: 35px;
}

</style>