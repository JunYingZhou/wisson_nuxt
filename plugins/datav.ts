// plugins/datav.ts
import { defineNuxtPlugin } from "#app";
// import DataV from '@jiaminghi/data-view'
import DataV from "@newpanjing/datav-vue3"; // 这里的导入路径根据实际的兼容库来定

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(DataV);
});

