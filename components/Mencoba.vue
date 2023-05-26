<template>
  <div>
    <input type="file" multiple @change="handleFileUpload" />
    <button @click="uploadFiles">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    }
  },
  methods: {
    handleFileUpload(event) {
      this.files = event.target.files
    },
    async uploadFiles() {
      const formData = new FormData()
      for (let i = 0; i < this.files.length; i++) {
        formData.append('files[]', this.files[i])
      }

      try {
        const response = await this.$axios.post(
          'https://bantuin.fly.dev/api/attaches',
          formData
        )
        this.$store.commit('setUploadedFiles', response.data.files)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
