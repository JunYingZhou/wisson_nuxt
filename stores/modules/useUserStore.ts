/*
 * @Author: zjy 3497577844@qq.com
 * @Date: 2024-08-15 22:13:44
 * @LastEditors: zjy 3497577844@qq.com
 * @LastEditTime: 2024-08-16 01:46:04
 * @FilePath: \my-app\stores\modules\useUserStore.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface UserInfo {
    token: string;
    refreshToken: string;
}

export const useUserInfoStore = defineStore('useUserInfoStore', () => {
    // Initialize userInfo with default values
    const userInfo = ref<UserInfo>({
        token: '',
        refreshToken: '',
    });

    // Initialize token separately
    const token = ref<string>('');

    // Update userInfo and store it in localStorage
    function setUserInfo(data: UserInfo): void {
        userInfo.value = data;
        if (process.client) {
            // localStorage.setItem('userInfo', JSON.stringify(data)); // Store only the data object
        }
    }

    // Update token and store it in localStorage
    function setToken(newToken: string): void {
        token.value = newToken;
        if (process.client) {
            // localStorage.setItem('token', JSON.stringify(newToken)); // Store only the token
        }

    }

    function clearToken(): void {
        token.value = '';
    }

    // Computed properties to get values
    const getToken = computed(() => token.value);
    const getUserInfo = computed(() => userInfo.value);

    // Return store methods and properties
    return { getToken, setUserInfo, userInfo, getUserInfo, setToken, token, clearToken };
});
