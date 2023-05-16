export const state = () => ({});

export const mutations = {};

export const actions = {
  async uploadFiles({ ctx }, formData) {
    try {
      const response = await this.$axios.post("https://bantuin.fly.dev/api/attaches", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
};