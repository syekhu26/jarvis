export const state = () => ({
    dataUser : []
})

export const getters = {
    getUser(state) {
        return state.dataUser
    }
}

export const mutations = {
    setDataUser(state, value){
        state.dataUser = value
    }
}

export const actions = {
    getdataUser({commit}, id){
        return this.$axios.get(`/users/${id}`).then((res)=> commit('setDataUser', res.data)).catch((err)=> console.log(err))
        
    }
}