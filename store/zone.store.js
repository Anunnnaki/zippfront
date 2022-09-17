import { setProperty } from "~/plugins/helpers";
import { Zone } from "~/interfaces/zone.interface";

const getDefaultState = () => ({
  editedZone: { ...Zone },
});

export const state = () => ({
  ...getDefaultState(),
});

export const mutations = {
  mutUpdateKey(state, payload) {
    state[payload.object][payload.key] = payload.value;
  },

  mutUpdateValue(state, payload) {
    state[payload.key] = payload.value;
  },

  mutResetState(state) {
    Object.assign(state, getDefaultState());
  },

  setProperty,
};

export const actions = {
  actUpdateKey({ commit }, payload) {
    commit("mutUpdateKey", payload);
  },

  actUpdateValue({ commit }, payload) {
    commit("mutUpdateValue", payload);
  },

  actResetState({ commit }) {
    commit("mutResetState");
  },
};

export const getters = {
  editedZone({editedZone}) {
    return editedZone
  }
}