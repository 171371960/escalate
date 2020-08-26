<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  height: 40px;
  background: transparent;
  border: #42b983 solid 1px;
}
</style>

<style lang="scss">
html {
  font-size: 19.2px; /*默认以设计稿为基准*/
}

@media screen and (max-width: 1440px) and (min-width: 1281px) {
  html {
    font-size: 13.6px;
  }
}
@media screen and (max-width: 1280px) and (min-width: 1025px) {
  html {
    font-size: 11.6px;
  }
}
@media screen and (max-width: 1024px) and (min-width: 961px) {
  html {
    font-size: 10px;
  }
}
@media screen and (max-width: 960px) and (min-width: 677px) {
  html {
    font-size: 9.6px;
  }
}

#test {
  width: 14.21875rem;
}
@function px2Rem($px, $base-font-size: 19.2px) {
  @if (unitless($px)) {
    //有无单位
    @return ($px / 19.2) * 1rem;
  } @else if (unit($px) ==em) {
    @return $px;
  }

  @return ($px / $base-font-size) * 1rem;
}
.main {
  width: 4rem;
  height: 60px;
  margin: 0 auto;
  background: #e7eaec;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      vuex
      {{ num }}
      <span>{{ vuexValue }}</span>
      <span>{{ getterValue }}</span>
    </div>
    <button @click="changeFun">更改num的值</button>
    <br />
    <button @click="vuexAddFun">调用vuex的函数</button>
    <br />
    <button @click="vuex_AddFun">异步 调用vuex的函数</button>
    <br />
    <button @click="getterFun">vuex的计算</button>
    <div class="div_top">快</div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      num: "ddd",
      vuexValue: null,
      getterValue: null
    };
  },
  mounted() {
    // console.log(this.$store.state.count);
    this.get();
  },
  methods: {
    changeFun() {
      this.num = this.$store.state.count;
    },
    vuexAddFun() {
      this.$store.commit("increment");
      this.vuexValue = this.$store.state.count;
    },
    vuex_AddFun() {
      this.$store.dispatch("ActionIncrement");
      this.vuexValue = this.$store.state.count;
    },
    getterFun() {
      // console.log(this.$store.getters);

      this.getterValue = this.$store.getters.doneTodos;
    },
    get() {
      var arr = [1, 2, 4, 5, 3];

      arr.map(item => {
        return (item = item + 1);
      });
      // console.log(arr);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
