import axios from 'axios';

export default defineEventHandler(async (event) => {
    try {
        const response = await axios.get('http://localhost:8989/api/getData');
        console.log("数据是", response.data);
        return response.data;
    } catch (error) {
        console.error("请求数据时出错", error);
        // Optionally handle the error, return a default value or throw an error
        return { error: 'Data fetch failed' };
    }
});
