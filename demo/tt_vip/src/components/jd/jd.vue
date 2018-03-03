<template>
  <div>
    <!-- 最外部的盒子 -->
    <div class="jd-container">
      <!-- 顶部的通栏-->
      <div class="jd-header">
        <a href="javascript:void(0)" class="header-logo"></a>
        <span class="header-glass"></span>
        <input type="search" class="header-search">
        <a href="javascript:void(0)" class="header-login">登录</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style>

  .jd-container {
    width: 100%
  }

  .jd-header {
    width: 100%;
    height: 40px;
    background-color: rgb(201, 21, 35);
  }

  .jd-header .header-logo {
    width: 60px;
    height: 36px;
    position: absolute;
    left: 5px;
    top: 2px;
    background-image: url('sprites.png');
  }

</style>
