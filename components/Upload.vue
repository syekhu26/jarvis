<template>
  <div>
    <div class="mb-2">
      <label for="" class="font-bold"> Upload File</label>
      <p>File yang support adalah .jpg , .png atau .pdf</p>
    </div>
    <div>
      <form action="">
        <input
          type="file"
          multiple
          name="file"
          id="fileInput"
          class="overflow-hidden absolute opacity-0"
          @change="onChange"
          ref="file"
          accept=".pdf,.jpg,.jpeg,.png"
        />
      </form>
      <div
        class="text-base bg-white text-black font-semibold py-2 px-5 border border-slate-300 w-44 rounded cursor-pointer"
      >
        <label for="fileInput" class="text-center">
          <div v-if="files">Upload file</div>
        </label>
      </div>

      <div class="mt-4" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="flex">
          <div>
            <img
              class="w-72 h-44 rounded border"
              :src="generateThumbnail(file)"
            />
            <div class="flex items-center justify-between bg-slate-200 border">
              <p class="px-3" :title="file.name">
                {{ makeName(file.name) }}
              </p>
              <div>
                <button
                  class="ml-2 mt-2"
                  type="button"
                  @click="remove(files.indexOf(file))"
                  title="Remove file"
                >
                  <iconHapusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        type="submit"
        @click="upload"
        class="float-right inline-flex justify-center rounded border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
      >
        Simpan
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      files: [],
    }
  },
  methods: {
    onChange(e) {
      this.files = [...this.files, ...this.$refs.file.files]
    },

    generateThumbnail(file) {
      const fileSrc = URL.createObjectURL(file)
      setTimeout(() => {
        URL.revokeObjectURL(fileSrc)
      }, 1000)
      return fileSrc
    },

    makeName(name) {
      return (
        name.split('.')[0].substring(0) +
        '.' +
        name.split('.')[name.split('.').length - 1]
      )
    },

    remove(i) {
      this.files.splice(i, 1)
    },

    // upload() {
    //   const formData = new FormData()
    //   for (let i = 0; i < this.files.length; i++) {
    //     formData.append('files', this.files[i])
    //   }
    //   this.$store.dispatch('upload/uploadFiles', formData)
    // },
    upload() {
      const formData = new FormData()
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]

        formData.append('files[' + i + ']', file)
      }
      this.$axios
        .post('https://bantuin.fly.dev/api/attaches', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function () {
          console.log('Upload File Success')
        })
        .catch(function () {
          console.log('Upload File Failled')
        })
    },
  },
  computed: {
    isButtonDisabled() {
      return this.files.length > 0
    },
  },
}
</script>

<style></style>
