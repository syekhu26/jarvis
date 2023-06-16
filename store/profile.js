export const state = () => ({
  dataUser: [],
})

export const getters = {
  getUser(state) {
    return state.dataUser
  },
}

export const mutations = {
  setDataUser(state, value) {
    state.dataUser = value
  },
  deleteUser(state, userId) {
      state.dataUser = state.dataUser.filter(user => user.id !== userId)
    },
}

export const actions = {
  getdataUser({ commit }, id) {
    return this.$axios
      .get(`/users/${id}`)
      .then((res) => commit('setDataUser', res.data))
      .catch((err) => console.log(err))
  },
  updateProfile(ctx, user) {
    const headers = { 'Content-Type': 'multipart/form-data' }
    const data = new FormData()

    if (user.photo) {
      data.append('photo', user.photo)
    } else {
      data.append('username', user.username)
      // data.append('email', user.email)
      data.append('phone', user.phone)
      data.append('job', user.job)
    }
    return this.$axios.$put(`users/${user.id}`, data, { headers })
  },
  async deleteUser({ commit }, userId) {
        await this.$axios.delete(`https://bantuin.fly.dev/api/users/${userId}`)
        commit('deleteUser', userId)
    },
}
