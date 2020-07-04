import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    howManySelected: 0
  },
  mutations: {
    setHowManySelected(state, payload) {
      state.howManySelected = payload;
    }
  },
  getters: {
    showFloatingButton(state) {
      return state.howManySelected > 0;
    },
    getState(state) {
      return state.howManySelected;
    }
  },
  actions: {},
  modules: {}
});
