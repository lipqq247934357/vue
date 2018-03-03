<template>
  <div>
    <zongzi1></zongzi1>
  </div>
</template>

<script>
  import pop3 from './components/zongZi/pop3/pop3.vue';
  import pop2 from './components/zongZi/pop2/pop2.vue';
  import pop1 from './components/zongZi/pop1/pop1.vue';
  import zongzi1 from './components/zongZi/zongzi_1/zongzi_1';

  export default {
    data: function () {
      return {};
    },
    components: {
      'pop3': pop3,
      'pop2': pop2,
      'pop1': pop1,
      'zongzi1': zongzi1
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
