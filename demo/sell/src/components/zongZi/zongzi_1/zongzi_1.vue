<style>

  body {
    background: #f4fbda;
  }

  .banner {
    background: url("banner.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    width: 10.8rem;
    height: 7.15rem;
  }

  .time {
    margin: .2rem auto;
    color: #0aa758;
    padding-left: .6rem;
  }

  .time-item {
    display: block;
    float: left;
    width: .9rem;
    height: 1.38rem;
    -webkit-border-radius: .09rem;
    -moz-border-radius: .09rem;
    border-radius: .09rem;
    background: #fff;
    padding: 0rem;
    margin: 0rem;
    font-size: 1.38rem;
    font-weight: bold;
    margin:0 .03rem;
  }

  .time-item2 {
    display: block;
    float: left;
    width: .5rem;
    height: 1.38rem;
    -webkit-border-radius: .09rem;
    -moz-border-radius: .09rem;
    border-radius: .09rem;
    background: none;
    padding: 0rem;
    margin: 0rem;
    font-size: 1.38rem;
    font-weight: bold;
  }

  .qiang {
    margin: .2rem auto;
    width: 3.6rem;
    height: 3.6rem;
    background: url("qiang.png");
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .remainTimes {
    margin: .2rem auto;
    color: #0aa758;
    font-size: .48rem;
    text-align: center;
  }

  .remainTimes span {
    color: #ff523c;
    font-size: .72rem;
  }

  .addInterest {
    background: #0aa758;
    height: 3.44rem;
    width: 9.34rem;
    margin: .2rem auto;
    border-radius: .36rem;
    padding: .68rem .5rem .46rem .5rem;
    font-size: .42rem;
    line-height: .81rem;
    text-align: center;
    color: #fff;
  }

  .addInterest .in {
    display: inline-block;
    width: 4.31rem;
    height: 1.2rem;
    background: #ff523c;
    border-radius: .6rem;
    line-height: 1.2rem;
    color: #fff;
    position: relative;
    top: .5rem;
    right: .35rem;
  }

  .addInterest .add {
    display: inline-block;
    width: 4.31rem;
    height: 1.2rem;
    background: #93a2ff;
    border-radius: .6rem;
    line-height: 1.2rem;
    color: #fff;
    position: relative;
    top: .5rem;
    left: .35rem;
  }

  .awardList {
    width: 90%;
    margin: .8rem auto;
    font-size: .42rem;
    line-height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    color: #0aa758;
    border-top: .01rem dashed #0aa758;
    border-bottom: .01rem dashed #0aa758;
  }

  .rule {
    width: 90%;
    margin: 0 auto;
    font-size: .42rem;
    line-height: .62rem;
    color: #818869;
  }

  .bottomImg {
    margin-top: .65rem;
    width: 100%;
    height: 2.2rem;
    background: url("bottom.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

</style>

<template>
  <div>
    <div class="banner"></div>
    <div>
      <div class="time clearfix">
        <span class="time-item">0</span>
        <span class="time-item">0</span>
        <span class="time-item">0</span>
        <span class="time-item2">,</span>
        <span class="time-item">0</span>
        <span class="time-item">0</span>
        <span class="time-item">0</span>
        <span class="time-item2">,</span>
        <span class="time-item">0</span>
        <span class="time-item">0</span>
        <span class="time-item">0</span>
      </div>
      <div class="qiang"></div>
      <div class="remainTimes">
        剩余抢红包次数：<span>0</span> 次
      </div>
      <div class="addInterest">
        转入即可获得抢红包机会，每人每天限1次<br>
        加入加息计划，即可获得抽奖机会，无次数限制。
        <a class="in" href="javascript:void(0);">转入</a>
        <a class="add" href="javascript:void(0);">加息计划</a>
      </div>
      <div class="awardList">
        132****5431   抢到了  100,000元！<br>
        132****5431   抢到了  1,000元！<br>
        石伟大   抢到了  9,000元！
      </div>
      <div class="rule">
        <p class="rule-title">详细规则：</p>
        <br>
        <p class="rule-content">
          1.活动时间：2017.5.26-30日<br>
          2.活动期间，总共个1亿红包，转入或加入加息计划就可以抢，抢完为止。<br>
          3.抢到红包后，分享到朋友圈，有机会获得红包金额翻倍。<br>
          4.本活动最终解释权归我能理财所有，如遇刷奖行为，我能有权取消刷奖人的红包奖励。
        </p>
      </div>
      <div class="bottomImg">
      </div>
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

