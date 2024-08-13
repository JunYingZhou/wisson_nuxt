// plugins/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8989/api', // 基础 API URL
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
axiosInstance.interceptors.request.use(config => {
    // 可以在这里添加认证头或其他请求配置
    // const token = localStorage.getItem('token');
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }

    console.log("进行请求数据设置")

    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
axiosInstance.interceptors.response.use(response => {

    console.log("进行响应请求设置")

    return response.data;
}, error => {
    // 可以在这里处理响应错误
    return Promise.reject(error);
});

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('axios', axiosInstance);
});
