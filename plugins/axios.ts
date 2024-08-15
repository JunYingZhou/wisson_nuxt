// plugins/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://47.115.50.181:8080/api', // 基础 API URL
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
axiosInstance.interceptors.request.use(config => {
    // 可以在这里添加认证头或其他请求配置
    if (process.client){
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    console.log("进行请求数据设置")

    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
axiosInstance.interceptors.response.use(response => {

    console.log("进行响应请求设置")
    // 如何token过期，则跳转到登录页面
    if (response.data.code === 401) {
        if (process.client){
            // localStorage.removeItem('token');
            navigateTo('/login');
        }
    }

    return response.data;
}, error => {
    // 可以在这里处理响应错误
    return Promise.reject(error);
});

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('axios', axiosInstance);
});
