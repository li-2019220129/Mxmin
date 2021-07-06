<template>
  <div class="login">
    <div class="container">
      <a href="">
        <img src="/imgs/login-logo.png" alt="" />
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-cart">
          <div class="write">
            <span>帐号登录</span><span>|</span><span>扫码登录</span>
          </div>
          <div class="input">
            <input type="text" placeholder="请输入用户名" v-model="username" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms">手机短信登录/注册</div>
            <div class="reg" @click="registerClick">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">我的我的我的</a><span>|</span>
        <a href="javascript:;">我的我的我的</a><span>|</span>
        <a href="javascript:;">我的我的我的</a><span>|</span>
        <a href="javascript:;">我的我的我的</a>
      </div>
      <p class="copyright">
        https://github.com/li-2019220129/Mxmin#readme
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      userId: '',
    }
  },
  methods: {
    registerClick(){
       this.$router.push({name:'register'})
    },
    login() {
      let { username, password } = this
      this.axios
        .post('/user/login', {
          username,
          password,
        })
        .then((res) => {
          this.$cookie.set('userId', res.id, { expires: 'Session' })
          // this.$store.dispatch('saveUserName',res.username);
          this.saveUserName(res.username)
          this.$router.push({
            name: 'index',
            params: {
              from: 'login',
            },
          })
        })
    },
    ...mapActions(['saveUserName']),
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
.login {
  .container {
    position: relative;
    width: 1226px;
    height: 111px;
    margin-right: auto;
    margin-left: auto;
    a{
      display: inline-block;
      img{
        height: 100%;
        width: auto;
      }
    }
  }
  .wrapper {
    height: 576px;
    background: url('/imgs/login-bg.jpg') no-repeat center;
    background-size: cover;
    .login-cart {
      box-sizing: border-box;
      padding-left: 31px;
      padding-right: 31px;
      width: 410px;
      height: 510px;
      position: absolute;
      right: 0;
      bottom: 29px;
      background-color: #fff;
      .write {
        display: flex;
        margin-top: 35px;
        margin-bottom: 35px;
        justify-content: space-around;
        span {
          text-align: center;
          line-height: 40px;
          font-size: 24px;
          font-weight: bold;
          display: inline-block;
          &:first-child {
            margin-left: 50px;
            color: $colorA;
          }
          &:nth-of-type(2) {
            flex: 1;
          }
          &:last-child {
            margin-right: 50px;
          }
        }
      }
      .input {
        display: inline-block;
        width: 348px;
        height: 50px;
        border: 1px solid #e5e5e5;
        margin-bottom: 20px;
        input {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          border: none;
          padding: 18px;
        }
      }
      .btn-box {
        height: 60px;
        .btn {
          margin-top: 10px;
          width: 100%;
          font-size: 16px;
          line-height: 50px;
        }
      }
      .tips {
        margin-top: 14px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        cursor: pointer;
        .sms {
          color: #ff6600;
        }
        .reg {
          color: #999999;
          span {
            margin: 0 7px;
          }
        }
      }
    }
    .container {
      position: relative;
      height: 576px;
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-link {
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>
