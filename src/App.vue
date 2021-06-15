<template>
  <div id="app">
    <Home />
    <router-view />
  </div>
</template>
<script>
import Home from './pages/home.vue'
export default {
  components: {
    Home,
  },
}
</script>
<style></style>
