export const state = () => ({
    notes: [],
    history:[],
    reqlist:[],
    showDetail : false,
    detailNotes : null,
    selectedFilter: null,
  })
  
  export const mutations = {
    setNotes(state, notes) {
      state.notes = notes
    },
    setReqlist(state, reqlist) {
      state.reqlist = reqlist
    },
    setHistory(state, history) {
      state.history = history
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter(note => note.id !== noteId)
    },
    setShowDetail(state,payload){
      state.showDetail = payload
    },
    detailNotes(state,payload){
      state.detailNotes = payload
    },
    setFilter(state, filter) {
      state.selectedFilter = filter;
    },
  }
  
  export const actions = {
    async fetchNotes({ commit }) {
      const notes = await this.$axios.$get('https://bantuin.fly.dev/api/notes?note=upcoming')
      commit('setNotes', notes.data)
    },
    async addNote({ dispatch }, note) {
        await this.$axios.$post('https://bantuin.fly.dev/api/notes', note)
        dispatch('fetchNotes')
      },
    async deleteNote({ commit }, noteId) {
        await this.$axios.delete(`https://bantuin.fly.dev/api/notes/${noteId}`)
        commit('deleteNote', noteId)
    },
    async updateNote(ctx, {idNote,data}) {
       await this.$axios.put(`https://bantuin.fly.dev/api/notes/${idNote}`, data)
      
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
        commit('setNotes', id);
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

    setSelectedFilter({ commit }, filter) {
      commit('setFilter', filter);
    },

  }