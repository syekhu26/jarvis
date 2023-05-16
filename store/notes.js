export const state = () => ({
    notes: []
  })
  
  export const mutations = {
    setNotes(state, notes) {
      state.notes = notes
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter(note => note.id !== noteId)
    },
    // updateNote(state, updatedNote) {
    //   const index = state.notes.findIndex(note => note.id === updatedNote.id)
    //   state.notes.splice(index, 1, updatedNote)
    // }
  }
  
  export const actions = {
    async fetchNotes({ commit }) {
      const notes = await this.$axios.$get('https://bantuin.fly.dev/api/notes?note=upcoming')
      commit('setNotes', notes.data)
    },
    async addNote({ dispatch }, note) {
        await this.$axios.$post('https://bantuin.fly.dev/api/notes?note=upcoming', note)
        dispatch('fetchNotes')
      },
    async deleteNote({ commit }, noteId) {
        await this.$axios.delete(`https://bantuin.fly.dev/api/notes/${noteId}`)
        commit('deleteNote', noteId)
    },
    async updateNote(ctx, {idNote,data}) {
       await this.$axios.put(`https://bantuin.fly.dev/api/notes/${idNote}`, data)
      
    }
  }