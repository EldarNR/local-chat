import users from "~/data/users.json";

export const state = () => ({
  activeuser: { id: null, username: null },
  userList: users,
});

export const getters = {
  getActiveUser(state) {
    return state.activeuser;
  },
  getUserList(state) {
    return state.userList;
  },
};

export const mutations = {
  setUser(state, { id, username }) {
    state.activeuser.id = id;
    state.activeuser.username = username;
    state.userList = state.userList.filter((user) => user.id !== id);
  },
};

export const actions = {
  setUser({ commit }, payload) {
    commit("setUser", payload);
  },
};
