import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 12
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    ActionIncrement(context) {
      context.commit("increment");
    }
  },
  getters: {
    doneTodos(state) {
      return state.count * 2;
    }
  }
});
export default store;
