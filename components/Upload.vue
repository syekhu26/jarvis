<!-- <template>
  <div>
    <div>
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
      <div
        class="text-base bg-slate-500 text-white font-semibold py-2 px-5 hover:shadow-lg hover:bg-slate-700 w-44 rounded cursor-pointer"
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
    onChange() {
      this.files = [...this.$refs.file.files]
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
  },
}
</script>

<style></style> -->
