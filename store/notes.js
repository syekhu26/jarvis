export const state = () => ({
    notes: []
  })
  
  export const mutations = {
    setNotes(state, notes) {
      state.notes = notes
    }
  }
  
  export const actions = {
    async fetchNotes({ commit }) {
      const notes = await this.$axios.$get('https://bantuin.fly.dev/api/notes')
      commit('setNotes', notes.data)
    },
    async addNote({ dispatch }, note) {
        await this.$axios.$post('https://bantuin.fly.dev/api/notes', note)
        dispatch('fetchNotes')
      }
  }