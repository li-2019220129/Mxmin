<template>
  <div class="register">
    <div class="container">
      <div class="warp">
        <div class="logo">
          <a href="javascript:;" @click="resisterLogin"></a>
        </div>
        <div class="text-message">
          注册小米帐号
        </div>
        <div class="register-center">
          <div class="input">
            <input
              type="text"
              placeholder="请输入注册用户名"
              v-model="username"
            />
          </div>
          <div class="input">
            <input type="text" placeholder="请输入注册邮箱" v-model="email" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入注册密码"
              v-model="password"
            />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="register">注册</a>
          </div>
        </div>
      </div>
    </div>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'register',
  components: {
    NavFooter,
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
    }
  },
  methods: {
    resisterLogin(){
      this.$router.push({name:'index'})
    },
    register() {
      if (!this.password || !this.username.trim() || !this.email.trim()) {
        this.$message.waring('请先填写注册信息')
      }else if (this.password.trim()==='') {
        this.$message.waring('请输入正确的密码格式')
      } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(this.email)) {
       this.$message.waring('请输入正确的邮箱格式')
      } else {
        this.axios
          .post('/user/register', {
            username: this.username,
            password: this.password,
            email: this.email,
          })
          .then(() => {
            this.$message.success('注册成功')
            this.$router.push({ name: 'login' })
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
.register {
  background-color: #f9f9f9;
}
.warp {
  width: 609px;
  height: 500px;
  background-color: #fff;
  padding: 0 34px 30px 34px;
  margin: auto;
  margin-bottom: 20px;
  .logo {
    width: 100%;
    height: 48px;
    line-height: 48px;
    padding: 30px 0 40px 0;
    text-align: center;
    a {
      display: inline-block;
      width: 48px;
      height: 48px;
      background-image: url(https://account.xiaomi.com/static/res/8df71d6/account-static/respassport/acc-2014/img/milogo.png);
    }
  }
  .text-message {
    width: 100%;
    height: 45px;
    text-align: center;
    color: $colorI;
    font-size: $fontM;
  }
  .input {
    display: inline-block;
    width: 348px;
    height: 50px;
    border: 1px solid #e5e5e5;
    margin-left: 130px;
    margin-bottom: 20px;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: none;
      padding: 18px;
    }
  }
  .register-center {
    margin-top: 50px;
  }
}
.btn-box {
  height: 60px;
  text-align: center;
  .btn {
    margin-top: 10px;
    width: 348px;
    font-size: 16px;
    line-height: 50px;
  }
}
</style>
