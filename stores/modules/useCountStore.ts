// stores/exampleStore.ts
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
    state: () => ({
        count: 0
    }),
    persist: true, // 启用持久化
    actions: {
        increment() {
            this.count++;
        }
    }
});
