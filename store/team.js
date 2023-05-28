export const state = () => ({
    teams: [],
  })
  
  export const mutations = {
    setGroupList(state, teams) {
        state.teams = teams;
      },
  }
  
  export const actions = {
    async fetchGroupList({ commit }) {
      try {
        const response = await this.$axios.$get('/teams');
        const teams = response.data;
        commit('setGroupList', teams);
      } catch (error) {
        console.error(error);
      }
    },
    addGroup(ctx, team) {
      try {
        const headers = { 'Content-Type': 'multipart/form-data' }
        const data = new FormData()
          data.append('photo', team.photo)
          data.append('title', team.title)
          team.email.forEach((val, index) => {
            data.append(`emails[${index}]`, val.text)
          })
        return this.$axios.$post(`https://bantuin.fly.dev/api/teams`, data, { headers }).then(() => ctx.dispatch('fetchGroupList'))
      } catch (err) {
        throw new Error('Failed to post data')
      }
    },
  }