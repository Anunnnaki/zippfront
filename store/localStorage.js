export const state = () => ({
    token: ''
  })

  export const mutations = {
    updateKey(state, payload) {
      state[payload.key] = payload.value 
    }
   
  }
  export const actions = {
    actUpdateKey({commit}, payload) {
      commit('updateKey', payload)
    },
  }
  