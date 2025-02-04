<template>
    <div>
        <h1>Dashboard</h1>
        <p>Bienvenido, {{ userStore.username }}</p>
        <router-link to="/profile">Ir a Perfil</router-link>
    </div>
</template>

<script setup>
import { useUserStore } from '../store/userStore';
const userStore = useUserStore();
</script>