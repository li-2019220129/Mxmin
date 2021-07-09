<template>
  <div>
    <router-view/>
    <ServiceBar />
    <NavFooter />
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'order',
  data() {
    return {
      tip: '',
      title: '',
      top:this.$route.path
    }
  },
  components: {
    NavFooter,
    ServiceBar
  }
}
</script>

<style></style>
