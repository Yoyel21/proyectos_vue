<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div>
    <ThemeToggle></ThemeToggle>
    <router-view></router-view>
  </div>



</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ThemeToggle from "./components/ThemeToggle.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    ThemeToggle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dark{
  background-color: #697179;
  color: white;
}

.dark-btn{
  background-color: aliceblue;
}
</style>
