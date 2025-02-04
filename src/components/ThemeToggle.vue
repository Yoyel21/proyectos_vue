<template>
    <button @click="toggleDarkMode()" id="darkMode-button">Modo {{ isDark ? 'Claro' : 'Oscuro' }}</button>
</template>

<script setup>
import { ref } from 'vue';
const isDark = ref(localStorage.getItem('darkMode') === 'true');

const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    localStorage.setItem('darkMode', isDark.value);
    document.body.classList.toggle('dark', isDark.value);
    document.getElementById("darkMode-button").classList.toggle('dark-btn')
};
</script>