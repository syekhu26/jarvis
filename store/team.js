export const state = () => ({
  teams: [],
})

export const mutations = {
  setGroupList(state, teams) {
    state.teams = teams
  },
}

export const actions = {
  async fetchGroupList({ commit }) {
    try {
      const response = await this.$axios.$get('/teams')
      const teams = response.data
      commit('setGroupList', teams)
    } catch (error) {
      console.error(error)
    }
  },
  async addGroup(ctx, team) {
    try {
      const headers = { 'Content-Type': 'multipart/form-data' }
      const data = new FormData()
      data.append('photo', team.photo)
      data.append('title', team.title)
      team.email.forEach((val, index) => {
        data.append(`email[${index}]`, val)
      })
      return await this.$axios
        .$post(`https://bantuin.fly.dev/api/teams`, data, { headers })
        .then(() => ctx.dispatch('fetchGroupList'))
    } catch (err) {
      alert(err.response.message)
    }
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
