export const state = () => ({
    isLoading: false
})

export const mutations = {
  updateValue(state, payload) {
    state[payload.key] = payload.value 
  }
 
}
export const actions = {
  actUpdateValue({commit}, payload) {
    commit('updateValue', payload)
  },
}
export const getters = {
  isLoading({isLoading}) {
   return isLoading
  },
}
  