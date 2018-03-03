<template>
  <div id="toast" class="toast" style="display:none">
    <p class="tc"></p>
  </div>
  <input id="from" value="${qd!?html}" type="hidden"/>
  <input id="msgNid" value="${msgEnums.绑定手机.nid}" type="hidden"/>
  <div class="activityCont">
    <div class="activityBanner">
      <img class="db" src="${webRoot}/resource/channel/img/tuiguang28/banner.jpg" alt=""/>
    </div>
    <div class="activityBg1">
      <div class="activityCont1">
        <img class="db tc imgTitle" src="${webRoot}/resource/channel/img/tuiguang28/title1.png" alt="">
        <div class="registSendCont">
          <div class="inputCont">
            <div class="clearfix inputBox borRadius1">
              <span class="fl"><img class="db" src="${webRoot}/resource/channel/img/tuiguang28/phone.png"/></span>
              <input id="phoneNum" maxlength="11" type="text" placeholder="请输入手机号码"/>
            </div>
            <div class="clearfix inputBox borRadius1 imgCode">
              <span class="fl"><img class="db" src="${webRoot}/resource/channel/img/tuiguang28/img.png"/></span>
              <input id="picCode" type="text" placeholder="请输入右侧验证码"/>
              <img id="imgClick" src="${webRoot}/cptchaImage"
                   onClick="this.src='${webRoot}/cptchaImage?t=' + Math.random();" class="db fr" alt="">
            </div>
            <div class="clearfix smsCode">
              <div class="clearfix inputBox fl borRadius1">
                <span class="fl"><img class="db" src="${webRoot}/resource/channel/img/tuiguang28/code.png"/></span>
                <input id="smscode" type="number" placeholder="请输入验证码"/>
              </div>
              <a id="sendPhonecode" class="db tc fr borRadius1" href="javascript:void(0);">获取验证码</a>
            </div>
            <div class="clearfix inputBox borRadius1">
              <span class="fl"><img class="db" src="${webRoot}/resource/channel/img/tuiguang28/pwd.png"/></span>
              <input id="password" type="password" placeholder="设置密码（8-32位字符）"/>
            </div>
          </div>
          <a id="registBtn" class="db tc aBtn borRadius1" href="javascript:void(0);">立即注册</a>
        </div>
      </div>
    </div>

    <div class="activityBg2">
      <div class="activityCont2">
        <img class="db tc imgTitle" src="${webRoot}/resource/channel/img/tuiguang28/title2.png" alt="">
        <p class="tc">出借平台85天项目产品即送</p>
        <dl class="pr">
          <dt>
            <span class="db fl">首投<em>500</em>元</span><span>即送<em>100元京东卡</em></span>
          </dt>
          <dd class="pa"><img class="db tc imgTitle" src="${webRoot}/resource/channel/img/tuiguang28/1.png" alt=""></dd>
        </dl>
        <dl class="pr">
          <dt>
            <span class="db fl">首投<em>1000</em>元</span><span>即送<em>200元京东卡</em></span>
          </dt>
          <dd class="pa"><img class="db tc imgTitle" src="${webRoot}/resource/channel/img/tuiguang28/2.png" alt=""></dd>
        </dl>
        <dl class="pr">
          <dt>
            <span class="db fl">首投<em>5000</em>元</span><span>即送<em>300元京东卡</em></span>
          </dt>
          <dd class="pa"><img class="db tc imgTitle" src="${webRoot}/resource/channel/img/tuiguang28/3.png" alt=""></dd>
        </dl>
        <dl class="pr">
          <dt>
            <span class="db fl">首投<em>10000</em>元</span><span>即送<em>500元京东卡</em></span>
          </dt>
          <dd class="pa"><img class="db tc imgTitle" src="${webRoot}/resource/channel/img/tuiguang28/4.png" alt=""></dd>
        </dl>
        <a class="db tc aBtn borRadius1" href="${webRoot}/touch/project">马上领大奖</a>
        <img class="db tc registTips" src="${webRoot}/resource/channel/img/tuiguang28/tips.png" alt="">
      </div>
    </div>

    <div class="activityBg3">
      <div class="activityCont3">
        <img class="db tc imgTitle" src="${webRoot}/resource/channel/img/tuiguang28/title3.png" alt="">
        <div class="clearfix">
          <dl class="fl">
            <dt><img class="db" src="${webRoot}/resource/channel/img/tuiguang28/introduce1.png" alt=""></dt>
            <dd>资金透明<br/>江西银行资金存管</dd>
          </dl>
          <dl class="fl">
            <dt><img class="db" src="${webRoot}/resource/channel/img/tuiguang28/introduce2.png" alt=""></dt>
            <dd>安全稳健<br/>运行3年0逾期0坏账</dd>
          </dl>
          <dl class="fl">
            <dt><img class="db" src="${webRoot}/resource/channel/img/tuiguang28/introduce3.png" alt=""></dt>
            <dd>公开透明<br/>项目流程360度风控</dd>
          </dl>
          <dl class="fl">
            <dt><img class="db" src="${webRoot}/resource/channel/img/tuiguang28/introduce4.png" alt=""></dt>
            <dd>收益灵活<br/>1元起投门槛低</dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="activityBg4">
      <div class="activityCont4">
        <dl>
        <img class="db tc imgTitle" src="${webRoot}/resource/channel/img/tuiguang28/title4.png" alt="">
        <div class="activityRule">
          <p class="clearfix">
            <em class="db fl">1、</em>
            <span class="fl">活动时间：2017年11月20号0点-11月24号24点；</span>
          </p>
          <p class="clearfix">
            <em class="db fl">2、</em>
            <span class="fl">此页面注册新用户，首次单笔出借平台85天及以上定期直投项目即可获得对应礼品，数量有限，先到先得；</span>
          </p>
          <p class="clearfix">
            <em class="db fl">3、</em>
            <span class="fl">兑现方式及日期：出借后1-3个工作日内以短信形式发送至用户手机，使用规则以京东规定为准；</span>
          </p>
          <p class="clearfix">
            <em class="db fl">4、</em>
            <span class="fl">本次活动最终解释权归两只老虎所有，如有疑问请咨询客服：<a href="tel:400-990-3337">400-990-3337</a>。</span>
          </p>
        </div>
        <p class="tc pTips">京ICP备14022293号    北京两只老虎电子商务有限公司</p>
        <p class="tc prompt">出借有风险入市需谨慎</p>
        </dl>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
  /*硬件活动*/
  a {
    outline: none;
  }

  :focus {
    outline: 0;
  }

  ::-webkit-input-placeholder {
    font-size: 0.36rem;
  }

  .activityCont {
    background: #fff;
  }

  .activityBanner img {
    width: 100%;
  }

  .borRadius1 {
    border-radius: 0.1rem;
    -webkit-border-radius: 0.1rem;
    -moz-border-radius: 0.1rem;
    -o-border-radius: 0.1rem;
  }

  .activityBg1 {
    background: url(${webRoot}/resource/channel/img/tuiguang28/bg1.jpg) no-repeat top center;
    height: 9.18rem;
    background-size: 100% 100%;
  }

  .activityBg2 {
    background: url(${webRoot}/resource/channel/img/tuiguang28/bg2.jpg) no-repeat top center;
    height: 11.44rem;
    background-size: 100% 100%;
  }

  .activityBg3 {
    background: url(${webRoot}/resource/channel/img/tuiguang28/bg3.jpg) no-repeat top center;
    height: 9.89rem;
    background-size: 100% 100%;
  }

  .activityBg4 {
    background: url(${webRoot}/resource/channel/img/tuiguang28/bg4.jpg) no-repeat top center;
    height: 8.44rem;
    background-size: 100% 100%;
  }

  .imgTitle {
    width: 5.96rem;
    height: 1rem;
    margin: 0 auto;
  }

  .imgTitle1 {
    width: 6.54rem;
    height: 1rem;
  }

  .activityCont2, .activityCont3 {
    width: 9.8rem;
    margin: 0 auto;
  }

  .activityCont1 {
    width: 9.3rem;
    margin: 0 auto;
  }

  .registSendCont {
    margin-top: .45rem;
  }

  .registSendCont .inputCont {
    width: 9.3rem;
    margin: 0 auto;
  }

  .registSendCont .inputCont .inputBox {
    background: #fff;
    padding: 0.2rem 0;
    margin-bottom: .3rem;
    border: 1px solid #ccc;
  }

  .registSendCont .inputCont .inputBox span {
    display: inline-block;
    box-sizing: border-box;
    margin-left: 0.1rem;
  }

  .registSendCont .inputCont .inputBox span img {
    width: 0.55rem;
    height: 0.62rem;
    margin: 0.05rem 0.3rem 0;
  }

  .registSendCont .inputCont .inputBox input {
    border: none;
    width: 7rem;
    line-height: 0.62rem;
    box-sizing: border-box;
    font-size: 0.36rem;
    color: #181818;
  }

  .registSendCont .inputCont .smsCode a {
    height: 1.12rem;
    width: 4.09rem;
    background: #e1bb6f;
    font-size: 0.48rem;
    color: #fff;
    line-height: 1.13rem;
  }

  .registSendCont .inputCont .smsCode a.cantClick {
    background: #d8d8d8;
  }

  .registSendCont .inputCont .smsCode div.fl {
    width: 5rem;
  }

  .registSendCont .inputCont .smsCode div.fl input {
    width: 3rem;
  }

  .registSendCont .inputCont .imgCode input {
    width: 5rem;
  }

  .registSendCont .inputCont .imgCode img {
    width: 2.5rem;
    height: 1.03rem;
    margin: -0.205rem 0.1rem -0.205rem 0;
  }

  .registSendCont a.aBtn, .activityCont2 a.aBtn, .projectIntroCont a.aBtn {
    width: 9.3rem;
    height: 1.12rem;
    font-size: 0.48rem;
    background: #e1bb6f;
    margin: 0 auto;
    line-height: 1.12rem;
    color: #83601c;
  }

  .activityCont2 dl {
    width: 9.02rem;
    margin: 0 auto .3rem;
    height: 1.1rem;
    background: rgba(241, 208, 132, .1);
  }

  .activityCont2 dl dd {
    right: -.34rem;
    top: .2rem;
  }

  .activityCont2 dl dd img {
    width: 1.91rem;
  }

  .activityCont2 dl dt {
    line-height: 1.1rem;
    color: #fff;
    font-size: .36rem;
  }

  .activityCont2 dl em {
    color: #f4f29f;
    font-size: .48rem;
    font-style: normal;
    margin: 0 .1rem;
  }

  .activityCont2 dl span:first-child {
    width: 3rem;
    margin-left: .3rem;
  }

  .activityCont2 p {
    font-size: .36rem;
    color: #f4f29f;
    line-height: 1.3rem;
  }

  .activityCont2 a.aBtn {
    margin-top: .65rem;
  }

  .registTips {
    width: 8.43rem;
    margin: .45rem auto 0;
  }

  .activityCont3 dl {
    width: 50%;
    text-align: center;
    margin-top: .8rem;
  }

  .activityCont3 dl dt img {
    width: 1.7rem;
    margin: 0 auto;
  }

  .activityCont3 dl dd {
    font-size: .36rem;
    color: #f4f29f;
    line-height: .6rem;
    margin-top: .2rem;
  }

  .activityCont4 {
    width: 9.3rem;
    margin: 0 auto;
  }

  .activityCont4 img.tips {
    width: 8.29rem;
    margin: .5rem auto 0;
  }

  .activityRule {
    width: 100%;
    margin: .3rem auto 0;
  }

  .activityRule p {
    font-size: .34rem;
    color: #fff;
    line-height: .6rem;
  }

  .activityRule p span {
    width: 95%;
  }

  .activityRule p em {
    font-style: normal;
    width: 5%;
  }

  .activityRule p span a {
    color: #ffffff;
  }

  .pTips {
    font-size: .26rem;
    color: #999;
    margin-top: 1rem;
  }

  .prompt {
    font-size: .36rem;
    color: #a5a3a5;
    margin-top: .22rem;
  }

  .toast {
    z-index: 10;
    float: left;
    position: fixed;
    left: 50%;
    top: 50%;
  }

  .toast p {
    position: relative;
    left: -50%;
    margin-top: -0.5rem;
    background: rgba(0, 0, 0, 0.7);
    line-height: 0.6rem;
    padding: 0.3rem 0.3rem;
    font-size: 0.36rem;
    color: #fff;
    border-radius: 0.2rem;
    -webkit-border-radius: 0.2rem;
    -moz-border-radius: 0.2rem;
    -o-border-radius: 0.2rem;
  }
</style>
