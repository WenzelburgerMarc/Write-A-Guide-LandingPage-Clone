const state = {
  user: null,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

const actions = {
  setUser({ commit }, user) {
    commit("SET_USER", user);
  },
};

const getters = {
  getUser: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
