export const state = () => ({
  notesTeam: [],
  history:[],
  reqlist:[],
  // showDetail : false,
  // detailnotes : null
})

export const mutations = {
  setNotesTeam(state, notesTeam) {
    state.notesTeam = notesTeam
  },
  setReqlist(state, reqlist) {
    state.reqlist = reqlist
  },
  setHistory(state, history) {
    state.history = history
  },
  deleteNote(state, noteId) {
    state.notesTeam = state.notesTeam.filter(note => note.id !== noteId)
  },
  // setShowDetail(state,payload){
  //   state.showDetail = payload
  // },
  // detailnotes(state,payload){
  //   state.detailnotes = payload
  // }
}

export const actions = {
  async NotesTeam({ commit },id) {
    const notes = await this.$axios.$get(`https://bantuin.fly.dev/api/cards/${id}`)
    commit('setNotesTeam', notes.data)
  },
  async addNoteTeam({ dispatch }, note) {
      await this.$axios.$post('https://bantuin.fly.dev/api/cards', note)
      dispatch('NotesTeam')
    },
  async deleteNote({ commit }, noteId) {
      await this.$axios.delete(`https://bantuin.fly.dev/api/cards/${noteId}`)
      commit('deleteNote', noteId)
  },
  async updateNote(ctx, {idNote,data}) {
     await this.$axios.put(`https://bantuin.fly.dev/api/cards/${idNote}`, data)
    
  },
  async history({ commit },id){
    try {
      const response = await this.$axios.get(`https://bantuin.fly.dev/api/notes/${id}/history`)
      commit('setHistory', response.data);
    }
    catch (error) {
      console.error(error);
    }
  },
  async remove({ commit },id){
      await this.$axios.post(`https://bantuin.fly.dev/api/notes/${id}/remove`)
      commit('setnotes', id);
  },
  // async getData({ commit }) {
  //   try {
  //     const response = await axios.get('https://example.com/api/data');
  //     commit('setData', response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async reqlist({ commit }) {
    try {
      const response = await this.$axios.get('https://bantuin.fly.dev/api/reqlist')
      commit('setReqlist', response.data);
    }
    catch (error) {
      console.error(error);
    }
  },

}