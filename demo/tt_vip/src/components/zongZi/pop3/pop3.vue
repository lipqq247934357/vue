<style>

  @font-face {
    font-family: 'Gotham-Black.otf';
    src: url('../../../common/fonts/Gotham-Black.otf');
  }

  body {
    background-color: #00d0ba;
  }

  .pop3 {
    width: 9.36rem;
    height: 6.29rem;
    text-align: center;
    background-color: #fff;
    font-size: .6rem;
    -webkit-border-radius: .5rem;
    margin: 0 auto;
    margin-top: 4.03rem;
  }

  .pop3 span {
    display: block;
    padding-top: 2rem;
    padding-bottom: 1.6rem;
  }

  .pop3 a {
    display: block;
    margin: 0 auto;
    width: 7.92rem;
    height: 1.47rem;
    background-color: #0aa758;
    color: #fff;
    -webkit-border-radius: .4rem;
    line-height: 1.44rem;
  }

  .close-icon {
    height: 1.2rem;
    width: 1.2rem;
    background: url("iocn_close.png") no-repeat;
    -webkit-background-size: 100%;
    margin: 0 auto;
    margin-top: 5rem;
  }
</style>

<template>
  <div id="pop3">
    <div class="pop3">
      <span>快看看你的抢红包机会吧!</span>
      <a href="javascript:void(0);">看一看</a>
    </div>
    <div @click="closePop3" class="close-icon">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data: function () {
      return {};
    },
    methods: {
      closePop3: function () {
      }
    }
  };
</script>
