<template>
    <div>
        <h1>Perfil</h1>
        <p>Usuario: {{ userStore.username }}</p>
        <h2>Datos desde API</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/userStore';

const userStore = useUserStore();
const posts = ref([]);

onMounted(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    posts.value = await res.json();
});
</script>