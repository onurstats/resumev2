import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageIndex: 0
  },
  mutations: {
    setpageIndex: (state, index) => {
      state.pageIndex = index;
    }
  },
  getters: {
    page: state => {
      return state.pageIndex;
    }
  }
});
