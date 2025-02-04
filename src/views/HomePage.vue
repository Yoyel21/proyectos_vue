<template>
    <div>
        <h1>Login</h1>
        <input v-model="username" placeholder="Nombre de usuario" />
        <button @click="login">Iniciar sesión</button>
        <router-link to="/home">Ir a Perfil</router-link>
    </div>
</template>

<script setup>
import { useUserStore } from '../store/userStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const userStore = useUserStore();
const router = useRouter();
const username = ref('');

const login = () => {
    userStore.setUser(username.value);
    router.push('/dashboard');
};
</script>