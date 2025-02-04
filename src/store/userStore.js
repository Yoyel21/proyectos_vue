import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        username: '',
    }),
    actions: {
        setUser(name) {
            this.username = name;
        }
    }
});