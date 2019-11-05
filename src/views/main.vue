<template>
  <div class="home">
    <div class="top">
      <router-view></router-view>
    </div>

    <footer>
      <router-link tag="span" to="/main/home">首页</router-link>
      <router-link tag="span" to="/main/idea">想法</router-link>
      <router-link tag="span" to="/main/edu">大学</router-link>
      <router-link tag="span" to="/main/msg">消息</router-link>
      <router-link tag="span" to="/main/my">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top{
  flex: 1;
  overflow: auto;
}
</style>