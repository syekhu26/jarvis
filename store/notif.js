export const state = () => ({
    notif:[],
  })
  
  export const mutations = {
    setNotif(state, notif) {
      state.notif = notif
    },
  }
  
  export const actions = {
    async notif({ commit }) {
      try {
        const response = await this.$axios.get('https://bantuin.fly.dev/api/notifications')
        commit('setNotif', response.data);
      }
      catch (error) {
        console.error(error);
      }
    },
    async client({ commit }) {
      try {
        const response = await this.$axios.get('https://bantuin.fly.dev/api/client_notif')
        commit('setNotif', response.data);
      }
      catch (error) {
        console.error(error);
      }
    },
  }