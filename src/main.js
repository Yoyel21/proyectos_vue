import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import HomePage from './views/HomePage.vue';
import DashboardPage from './views/DashboardPage.vue';
import ProfilePage from './views/ProfilePage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/dashboard', component: DashboardPage },
    { path: '/profile', component: ProfilePage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');