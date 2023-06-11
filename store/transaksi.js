export const actions = {
  async redem(ctx, {data}) {
    await this.$axios.post(`https://bantuin.fly.dev/api/transactions`, data)
   
 },
  }
