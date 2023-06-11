export const state = () => ({
  teams: [],
  detailTeam:[],
})

export const mutations = {
  setGroupList(state, teams) {
    state.teams = teams
  },
  setDetailTeam(state, detailTeam) {
    state.detailTeam = detailTeam
},
}

export const actions = {
  async fetchGroupList({ commit } , id) {
      const response = await this.$axios.$get(`/teams`)
      const teams = response.data
      commit('setGroupList', teams)
  },
  async addGroup({ dispatch }, team) {
    try {
      await this.$axios.$post('https://bantuin.fly.dev/api/teams', team)
      dispatch('fetchGroupList')
    } catch (err) {
      alert(err.response.message)
    }
  },
  async detailTeam({ commit },id){
    try {
      const response = await this.$axios.get(`https://bantuin.fly.dev/api/teams/${id}`)
      commit('setDetailTeam', response.data);
    }
    catch (error) {
      console.error(error);
    }
  },
  async tambahEmail(ctx, {idTeam,data}) {
    await this.$axios.put(`https://bantuin.fly.dev/api/teams/${idTeam}`, data)
   
 },
 async kick({ commit },{id,data}){
  await this.$axios.post(`https://bantuin.fly.dev/api/teams/${id}/kick_member`, data)
  // commit('setDetailTeam', id);
},
  // async addGroup(ctx, team) {
  //   try {
  //     const headers = { 'Content-Type': 'multipart/form-data' }
  //     const data = new FormData()
  //     data.append('photo', team.photo)
  //     data.append('title', team.title)
  //     team.email.forEach((val, index) => {
  //       data.append(`email[${index}]`, val)
  //     })
  //     return await this.$axios
  //       .$post(`https://bantuin.fly.dev/api/teams`, data, { headers })
  //       .then(() => ctx.dispatch('fetchGroupList'))
  //   } catch (err) {
  //     alert(err.response.message)
  //   }
  // },
  getDataGroup({ commit }, id) {
    return this.$axios
      .get(`/teams/${id}`)
      .then((res) => commit('setGroupList', res.data))
      .catch((err) => console.log(err))
  },
  updateGroup(ctx, team) {
    const headers = { 'Content-Type': 'multipart/form-data' }
    const data = new FormData()

    if (team.photo) {
      data.append('photo', team.photo)
    } else {
      data.append('title', team.title)
      data.append('email', team.email)
    }
    return this.$axios.$put(`teams/${team.id}`, data, { headers })
  },
}
