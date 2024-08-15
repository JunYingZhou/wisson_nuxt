// /*
//  * @Author: zjy 3497577844@qq.com
//  * @Date: 2024-08-10 15:49:25
//  * @LastEditors: zjy 3497577844@qq.com
//  * @LastEditTime: 2024-08-11 17:20:44
//  * @FilePath: \my-app\composables\index.ts
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// interface UserState {
//     username: string;
//     password: string;
//     auth: boolean;
// }
//
// export const userSetUpStore = defineStore('useCountStore.ts', () => {
//     const userState = ref<UserState>({
//         username: '',
//         password: '', // 假设密码是固定的
//         auth: false
//     });
//
//     const setUserInfo = (userInfo: any) => {
//         userState.value = userInfo;
//         if (process.client){
//             localStorage.setItem('userInfo', JSON.stringify(userInfo));
//         }
//     };
//
//     const setAuth = (auth: boolean) => {
//         userState.value.auth = auth;
//         if (process.client){
//             localStorage.setItem('userInfo', JSON.stringify(userState.value));
//         }
//     };
//
//     const setToken = (token: string) => {
//         if (process.client){
//             localStorage.setItem('userInfo', JSON.stringify(token));
//         }
//     }
//
//     const getAuthByLocalStorage = () => {
//         if (process.client) {
//             const auth = JSON.parse(localStorage.getItem("auth") as string);
//             if (auth !== null) {
//                 return auth;
//             }
//         }
//     }
//
//     const getAuth = computed(() => userState.value.auth);
//     const getUserInfo = computed(() => userState.value);
//
//     // const getAuth = computed(() => userState.value.auth || JSON.parse(localStorage.getItem("auth") as string));
//     // const getUserInfo = computed(() => userState.value || JSON.parse(localStorage.getItem("userInfo") as string));
//
//     return {
//         setUserInfo,
//         setAuth,
//         setToken,
//         getAuth,
//         getUserInfo,
//     };
//
//     // 注意：persist定义要做判断，因为localStorage/sessionStorage是客户端参数，所以需要加process.client
// });
