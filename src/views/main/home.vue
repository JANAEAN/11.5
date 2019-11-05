<template>
  <div class="box">
    <header>
      <router-link tag="span" to="/main/home/guanzhu">关注</router-link>
      <router-link tag="span" to="/main/home/tuijian">推荐</router-link>
      <router-link tag="span" to="/main/home/rebang">热榜</router-link>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.box {
  width: 100%;
  height: 1005;
  display: flex;
  flex-direction: column;
}
.box div{
    flex: 1;
    overflow: auto;
}
header{
    height: 50px;
    width:100%;
    display: flex;
    justify-content: space-around;
}
</style>

<script>
export default {};
</script>