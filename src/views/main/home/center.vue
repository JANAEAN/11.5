<template>
  <div class="box">
    <div>
      <dl v-for="(item,index) in list" :key="index">
        <dt>{{item.name}}</dt>
        <dd></dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
</style>


<script>
export default {
  data() {
    return {
      list: [
        { name: "长大" },
        { name: "长大" },
        { name: "长大" },
        { name: "长大" },
        { name: "长大" },
        { name: "长大" }
      ]
    };
  },
  created() {
    //写数据的地方
  }
};
</script>