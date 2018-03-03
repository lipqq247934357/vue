<style>

  @font-face {
    font-family: 'Ikaros-Regular.otf';
    src: url('../../../common/fonts/Ikaros-Regular.otf');
  }

  body {
    background-color: #00d0ba;
  }

  .pop2 {
    width: 9.36rem;
    height: 8.64rem;
    text-align: center;
    background-color: #fff;
    font-size: .6rem;
    line-height: .48rem;
    -webkit-border-radius: .5rem;
    margin: 0 auto;
    margin-top: 4.03rem;
  }

  .pop2 .zongzi {
    position: absolute;
    display: inline-block;
    background: url("zongzi.png") no-repeat;
    -webkit-background-size: 100%;
    height: 4.7rem;
    width: 3.3rem;
    margin-top: -.8rem;
    margin-left: -3rem;
  }

  .pop2 .awardAmt {
    display: inline-block;
    padding-top: .78rem;
    padding-bottom:.4rem;
    font-size: 1.5rem;
    line-height: .8rem;
    color: #aaaaaa;

  }

  .pop2 .awardAmt i {
    font-size: .6rem;
    line-height: .48rem;
    color: #aaaaaa;
  }

  .pop2 .beishu {
    font-size:.42rem;
    line-height:.48rem;
    color: #5a5a5a;
  }

  .pop2 .beishu2 {
    line-height:.72rem;
    font-size:.72rem;
    color: #555555;
  }

  .pop2 .awardAmt2 {
    font-size: 1.5rem;
    line-height: .8rem;
    padding-top:.4rem;
    padding-bottom: .6rem;
    color: #6c6c6c;
  }

  .pop2 .awardAmt2 i {
    font-size: .6rem;
    line-height: .48rem;
    color: #aaaaaa;
  }

  .pop2 a {
    display: block;
    margin: 0 auto;
    width: 7.92rem;
    height: 1.47rem;
    background-color: #0aa758;
    color: #fff;
    -webkit-border-radius: .7rem;
    font-size: .48rem;
    line-height: 1.44rem;
  }

  .pop2 .share {
    display: block;
    padding-top: .58rem;
    font-size: .42rem;
    line-height: .48rem;
    color: #aaaaaa;
  }

  .close-icon {
    height: 1.2rem;
    width: 1.2rem;
    background: url("iocn_close.png") no-repeat;
    -webkit-background-size: 100%;
    margin: 0 auto;
    margin-top: 5rem;
    font-family: "MPACT.TTF";
  }
</style>

<template>
  <div>
    <div class="pop2">
      <div>
        <div class="zongzi"></div>
        <div class="awardAmt">1888<i>元</i></div>
        <p class="beishu2">x</p>
        <p class="beishu">1.35</p>
        <p class="beishu2">=</p>
        <div class="awardAmt2">2000<i>元</i></div>
      </div>
      <a href="javascript:void(0);">收下</a>
      <span class="share">体验金已发放到您的帐户中</span>
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
