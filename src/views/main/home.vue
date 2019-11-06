<template>
  <div class="box">
    <header>
      <router-link tag="span" to="/main/home/guanzhu">关注</router-link>
      <router-link tag="span" to="/main/home/tuijian">推荐</router-link>
      <router-link tag="span" to="/main/home/rebang">热榜</router-link>
    </header>
    <div class="every">
      <div class="left" v-for="(item,index) in list" :key="index">
        <p>{{item.zan}}</p>
        <h5>{{item.why}}</h5>
        <p>{{item.title}}</p>
      </div>
      <div class="right">
        <img src="http://img0.imgtn.bdimg.com/it/u=1074688483,3865365075&fm=26&gp=0.jpg">
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          zan: "陈萌萌赞同了回答  11分钟前",
          why: "怎么看待结婚后父母一起居住",
          title:
            "匿名用户：这个问题取决于公婆是什么样的人，并不能以偏盖全。我只能说我自己的亲身经历。结婚前看灰灰不鸽核武器预期卫浴柜关于全国"
        },
        {
          zan: "陈萌萌赞同了回答  11分钟前",
          why: "怎么看待结婚后父母一起居住",
          title:
            "匿名用户：这个问题取决于公婆是什么样的人，并不能以偏盖全。我只能说我自己的亲身经历。结婚前看灰灰不鸽核武器预期卫浴柜关于全国"
        },
        {
          zan: "陈萌萌赞同了回答  11分钟前",
          why: "怎么看待结婚后父母一起居住",
          title:
            "匿名用户：这个问题取决于公婆是什么样的人，并不能以偏盖全。我只能说我自己的亲身经历。结婚前看灰灰不鸽核武器预期卫浴柜关于全国"
        },
        {
          zan: "陈萌萌赞同了回答  11分钟前",
          why: "怎么看待结婚后父母一起居住",
          title:
            "匿名用户：这个问题取决于公婆是什么样的人，并不能以偏盖全。我只能说我自己的亲身经历。结婚前看灰灰不鸽核武器预期卫浴柜关于全国"
        },
        {
          zan: "陈萌萌赞同了回答  11分钟前",
          why: "怎么看待结婚后父母一起居住",
          title:
            "匿名用户：这个问题取决于公婆是什么样的人，并不能以偏盖全。我只能说我自己的亲身经历。结婚前看灰灰不鸽核武器预期卫浴柜关于全国"
        },
        {
          zan: "陈萌萌赞同了回答  11分钟前",
          why: "怎么看待结婚后父母一起居住",
          title:
            "匿名用户：这个问题取决于公婆是什么样的人，并不能以偏盖全。我只能说我自己的亲身经历。结婚前看灰灰不鸽核武器预期卫浴柜关于全国"
        },
        {
          zan: "陈萌萌赞同了回答  11分钟前",
          why: "怎么看待结婚后父母一起居住",
          title:
            "匿名用户：这个问题取决于公婆是什么样的人，并不能以偏盖全。我只能说我自己的亲身经历。结婚前看灰灰不鸽核武器预期卫浴柜关于全国"
        }
      ]
    };
  }
};
</script>



<style lang="scss">
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.box div {
  flex: 1;
    border-bottom: 1px solid #000;
  //overflow: auto;
}
header {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.every {
  width: 100%;
  height: 100%;
 
  display: flex;
  flex-direction: column;
  font-size: 14px;

}
.left {
  margin-top: 10px;
  width: 200px;
  
  height: 200px;
}
.right {
  width: 175px;
  height: 180px;
}
.right img {
  width: 100%;
  height: 100%;
}
</style>
