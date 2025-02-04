<template>
    <button @click="cerrarSesion()"> Cerrar sesión</button>
</template>

<script setup>
const cerrarSesion = () =>{
    usuario = localStorage.getItem('username')
}
</script>