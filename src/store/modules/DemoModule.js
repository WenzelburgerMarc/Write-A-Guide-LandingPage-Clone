const state = {
  // Daten im Store
  demoData: null,
};

const mutations = {
  // Synchrone Änderungen im Store
  SET_DEMO_DATA(state, data) {
    state.demoData = data;
  },
};

const actions = {
  // Asynchrone Änderungen im Store
  setDemoData({ commit }, data) {
    commit("SET_DEMO_DATA", data); // Mutation aufrufen, actions aufrufen wäre dispatch
  },
};

const getters = {
  // Zugriff auf den Store
  getDemoData: (state) => state.demoData,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
