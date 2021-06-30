<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"
            ><span class="icon-cart"></span>购物车({{ cartCount }})</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a :href="`/#/product${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-1.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-2.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-3.png'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-4.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-5.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-6.png'" alt="" />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="warpper">
            <input type="text" name="text" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data() {
    return {
      phoneList: [],
    }
  },
  computed: {
    /*username(){
        return this.$store.state.username;
      },
      cartCount(){
        return this.$store.state.cartCount;
      }*/
    ...mapState(['username', 'cartCount']),
  },
  mounted() {
    this.getCartCount()
    this.getProductList()
  },
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    },
  },
  methods: {
    getProductList() {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012',
            pageSize: 6,
          },
        })
        .then((data) => {
          this.phoneList = data.list.slice(0, 6)
        })
    },
    goToCart() {
      this.$router.push('/cart')
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    },
    login() {
      this.$router.push('/login')
    },
    logout() {
      this.axios.post('/user/logout').then(() => {
        // this.$message.success('退出成功')
        this.$cookie.set('userId', '', { expires: '-1' })
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', '0')
        this.$router.push({ name: 'login' })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.header {
  user-select: none;
  .nav-topbar {
    height: 39px;
    width: 100%;
    background-color: black;
    line-height: 39px;
    color: #b0b0b0;
    .container {
      a {
        display: inline-block;
        text-decoration: none;
        color: #b0b0b0;
        margin-left: 17px;
      }
      .topbar-menu {
        float: left;
        margin-left: 50px;
      }
      .topbar-user {
        float: right;
        margin-right: 50px;
      }
      .my-cart {
        width: 110px;
        color: #fff;
        background: #ff6600;
        text-align: center;
        .icon-cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-menu {
        margin-right: 120px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          margin-right: 20px;
          line-height: 112px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              opacity: 1;
              height: 220px;
              border-top: 1px solid #e5e5e5;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            text-align: center;
            z-index: 999;
            overflow: hidden;
            transition: 0.5s;
            background-color: #fff;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 22px;
              a {
                display: inline-block;
                height: 100%;
              }
              img {
                width: auto;
                height: 110px;
                margin-top: 26px;
              }
              .pro-img {
                height: 136px;
              }
              .pro-name {
                margin: 18px 0 9px 0;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: ' ';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before {
                border-left: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .warpper {
          @include flex1();
          width: 100%;
          height: 50px;
          border: 1px solid #e0e0e0;
          input {
            box-sizing: border-box;
            width: 264px;
            height: 100%;
            border: none;
            outline: none;
            border-right: 1px solid #e0e0e0;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png');
            margin-left: 18px;
          }
        }
      }
    }
  }
}
</style>
