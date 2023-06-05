export const state = () => ({
    product: [],
  })

export const mutations = {
    setProduct(state, product) {
    state.product = product
},
}

export const actions = {
    async product({ commit }) {
        try {
          const response = await this.$axios.get('https://bantuin.fly.dev/api/products')
          commit('setProduct', response.data);
        }
        catch (error) {
          console.error(error);
        }
      },
}