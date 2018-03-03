<style>

  @font-face {
    font-family: 'Gotham-Black.otf';
    src: url('../../../common/fonts/Gotham-Black.otf');
  }
  body {
    background-color: #00d0ba;
  }

  .pop1 {
    width: 9.36rem;
    height: 7.81rem;
    text-align: center;
    background-color: #fff;
    font-size: .6rem;
    -webkit-border-radius: .5rem;
    margin: 0 auto;
    margin-top: 4.03rem;
    font-family:'Gotham-Black.otf';
  }

  .pop1 .zongzi {
    position: absolute;
    display: inline-block;
    background: url("zongzi.png") no-repeat;
    -webkit-background-size: 100%;
    height: 4.7rem;
    width: 3.3rem;
    margin-top: -.8rem;
    margin-left: -3rem;
  }

  .pop1 .awardAmt {
    display: inline-block;
    padding-top: 2rem;
    padding-bottom: 1.6rem;
    font-size: 1.5rem;
    color: #ff523c;
    font-family:'Gotham-Black.otf';
  }

  .pop1 .awardAmt i {
    font-size: .6rem;
    color: #aaaaaa;
    font-family:'Gotham-Black.otf';
  }

  .pop1 a {
    display: block;
    margin: 0 auto;
    width: 7.92rem;
    height: 1.47rem;
    background-color: #0aa758;
    color: #fff;
    -webkit-border-radius: .7rem;
    font-size: .48rem;
    line-height: 1.45rem;
    font-family:'Gotham-Black.otf';
  }

  .pop1 .share {
    display: block;
    padding-top: .6rem;
    font-size: .42rem;
    color: #aaaaaa;
    font-family:'Gotham-Black.otf';
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
  <div>
    <div class="pop1">
      <div>
        <div class="zongzi"></div>
        <div class="awardAmt">1888<i>元</i></div>
      </div>
      <a href="javascript:void(0);">炫耀一下</a>
      <span class="share">分享到朋友圈，红包随机翻倍</span>
    </div>
    <div class="close-icon">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data: function () {
      return {};
    }
  };
</script>
