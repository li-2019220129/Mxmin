<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/li-2019220129/Mxmin#readme" target="_blank">我的项目github地址</a><span>|</span>
      <a href="https://github.com/li-2019220129/Mxmin#readme" target="_blank">我的项目github地址</a><span>|</span>
      <a href="https://github.com/li-2019220129/Mxmin#readme" target="_blank">我的项目github地址</a><span>|</span>
    </div>
    <div class="copyright">Copyright ©2021 <span class="domain">https://github.com/li-2019220129/Mxmin#readme</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
.footer{
  // user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: $colorD;
  height: 234px;
  font-size:$fontI;
  text-align: center;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  min-width: 1226px;
  .footer-logo{
    margin-top:46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    a{
      text-decoration: none;
      color: $colorD;
      margin:0 10px 0 10px;
    }
  }
  .copyright{
    .domain{
      color: $colorA;
    }
  }
}
</style>
