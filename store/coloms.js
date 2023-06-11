export const state = () => ({
    coloms: [],
    showDetail : false,
    detailnotes : null
  })

  export const mutations = {
    setColoms(state, coloms) {
      state.coloms = coloms
    },
    setShowDetail(state,payload){
      state.showDetail = payload
    },
    detailnotes(state,payload){
      state.detailnotes = payload
    }
  }

  export const actions = {
    async fetchColoms({ commit }, id) {
      const coloms = await this.$axios.$get(`https://bantuin.fly.dev/api/teams/${id}/columns`)
      commit('setColoms', coloms.data)
    },
    async addColom({ dispatch }, colom) {
      await this.$axios.$post('https://bantuin.fly.dev/api/columns', colom)
      dispatch('fetchColoms')
    },
    async updateColom(ctx, {idColoms,data}) {
      await this.$axios.put(`https://bantuin.fly.dev/api/columns/${idColoms}`, data)
     
   },
  }
