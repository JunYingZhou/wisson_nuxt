// const { $axios } = useNuxtApp();
//
// /**
//  * 发送封装的POST请求
//  * @param {string} url - 请求的API端点
//  * @param {Object} data - 发送到服务器的数据
//  * @param {Object} [config] - 额外的axios配置项
//  * @returns {Promise} - 包含服务器响应的Promise对象
//  */
// export async function postRequest(url: string, data: any, config = {}) {
//     try {
//         const response = await $axios.post(url, data, config);
//         return response.data; // 返回响应数据
//     } catch (error) {
//         // 错误处理逻辑，可以根据需要自定义
//         console.error('POST请求失败:', error);
//         throw error; // 抛出错误，以便调用者可以进一步处理
//     }
// }