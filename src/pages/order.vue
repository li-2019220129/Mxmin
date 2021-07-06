<template>
  <div>
    <order-header :title="tip">
      <template v-slot:tip>
        <span>{{ title }}</span>
      </template>
    </order-header>
    <router-view />
    <ServiceBar />
    <NavFooter />
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue'
import ServiceBar from '../components/ServiceBar.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'order',
  data() {
    return {
      tip: '',
      title: '',
    }
  },
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar,
  },
  mounted() {
    let path=this.$route.path
    if(path==='/order/confirm'){
      this.tip='订单确认'
      this.title='请认真填写收货地址'
    }else if(path==='/order/list'){
      this.tip='订单列表'
      this.title='请谨防钓鱼链接和诈骗电话，了解更多 >'
    }else if(path==='/order/pay'){
      this.tip='订单支付'
      this.title='请谨防钓鱼链接和诈骗电话，了解更多 >'
    }
  },
}
</script>

<style></style>
