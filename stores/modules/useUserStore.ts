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
        if (process.client){
            // localStorage.setItem('userInfo', JSON.stringify(data)); // Store only the data object
        }
    }

    // Update token and store it in localStorage
    function setToken(newToken: string): void {
        token.value = newToken;
        if(process.client){
            // localStorage.setItem('token', JSON.stringify(newToken)); // Store only the token
        }

    }

    // Computed properties to get values
    const getToken = computed(() => token.value);
    const getUserInfo = computed(() => userInfo.value);

    // Return store methods and properties
    return { getToken, setUserInfo, userInfo, getUserInfo, setToken, token };
});
