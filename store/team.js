export const state = () => ({
  teams: [],
})

export const mutations = {
  setGroupList(state, teams) {
    state.teams = teams
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
