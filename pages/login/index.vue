<script setup lang="ts">

import {useExampleStore} from "~/stores/modules/useCountStore";
import {useUserInfoStore} from "~/stores/modules/useUserStore";

const { $axios } = useNuxtApp();
const router = useRouter();

const formData = ref({
  username: 'tenant@thingsboard.org',
  password: 'WissonRobotics2024'
});

const storesExample = useExampleStore();
const userStore = useUserInfoStore();


const login = async (event: Event) => {
  event.preventDefault();
  try {
    const result = await $axios.post('/auth/login', formData.value);
    console.log('登录成功，返回数据:', result);
    // 根据返回结果进行后续操作，例如保存token等
    userStore.setUserInfo(result);
    userStore.setToken(result.token);
    console.log('是否登录:', userStore.getToken);
    // 路由跳转到首页
    navigateTo('/');
  } catch (error) {
    // 处理登录失败的情况
    alert('用户名或密码错误');
    console.error('登录失败:', error);
  }
}

    // const data: ResponseData = await $fetch('http://localhost:8989/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify(formData.value),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    //
    // console.log('Login successful:', data);

  //   if (data.statusCode === 200) {
  //     store.setUserInfo(data); // Ensure 'data' contains the correct user info
  //     store.setAuth(true);
  //     store.setToken(data.data.token);
  //     console.log('User info:', store.getAuth);
  //     // Navigate to home page after successful login
  //     router.push('/');
  //   } else {
  //     console.error('Login error:', data.message || 'Unknown error');
  //   }
  // } catch (error) {
  //   console.error('Login failed:', error);
  //   // 弹窗
  //   alert('用户名或密码错误');
  // }
// };
</script>

<template>
  <div class="container">
    <form class="form" @submit="login">
      <span class="input-span">
        <label for="email" class="label">Email</label>
        <input v-model="formData.username" type="email" name="email" id="email" placeholder="Enter your email" />
      </span>
      <span class="input-span">
        <label for="password" class="label">Password</label>
        <input v-model="formData.password" type="password" name="password" id="password"
          placeholder="Enter your password" />
      </span>
      <span class="span"><a href="#">Forgot password?</a></span>
      <input class="submit" type="submit" value="Log in" />
      <span class="span">Don't have an account? <a href="#">Sign up</a></span>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/assets/images/backImage.png');
  /* Adjust path to your image */
  background-size: cover;
  background-position: center;
}

/* From Uiverse.io by bociKond */
.form {
  --bg-light: #efefef;
  --bg-dark: #707070;
  --clr: #eca011;
  --clr-alpha: #9c9c9c60;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.form .input-span {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form input[type="email"],
.form input[type="password"] {
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--clr-alpha);
  outline: 2px solid var(--bg-dark);
}

.form input[type="email"]:focus,
.form input[type="password"]:focus {
  outline: 2px solid var(--clr);
}

.label {
  align-self: flex-start;
  color: var(--clr);
  font-weight: 600;
}

.form .submit {
  padding: 1rem 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  background-color: var(--bg-dark);
  color: var(--bg-light);
  border: none;
  cursor: pointer;
  transition: all 300ms;
  font-weight: 600;
  font-size: 0.9rem;
}

.form .submit:hover {
  background-color: var(--clr);
  color: var(--bg-dark);
}

.span {
  text-decoration: none;
  color: var(--bg-dark);
}

.span a {
  color: var(--clr);
}
</style>
