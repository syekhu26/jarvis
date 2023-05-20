export const state = () => ({
  uploadedFiles: []
});

export const mutations = {
  setUploadedFiles(state, files) {
    state.uploadedFiles = files;
  }
};

export const actions = {
  async uploadFiles({ commit }, formData) {
    try {
      const response = await this.$axios.post('https://bantuin.fly.dev/api/attaches', formData);
      commit('setUploadedFiles', response.data);
    } catch (error) {
      console.error(error);
    }
  }
};