<template>
  <div>
    <div
      class="fixed inset-0 z-10 overflow-y-auto justify-center items-center overflow-x-hidden"
    >
      <div class="min-h-screen px-4 text-center">
        <!-- membuat bg gelap -->
        <div>
          <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        </div>

        <!-- popup form -->
        <div>
          <div
            class="my-5 inline-block w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
          >
            <div class="-mt-7">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <button
                    class="my-10 bg-green-500 px-5 py-1 rounded-full text-white font-semibold font-sans block mx-auto hover:bg-green-700 active:bg-green-900 focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-800 dark:hover:text-slate-900 dark:hover:bg-slate-100"
                  >
                    100%
                  </button>
                  <a href="" class="p-2">Lihat</a>
                </div>
                <div
                  class="w-10 h-10 rounded-full flex absolute mt-7 top-5 right-5 cursor-pointer"
                >
                  <iconSilangIcon />
                </div>
              </div>
              <h1 class="font-bold text-xl mb-3 -mt-6">Beli Tiket Pesawat</h1>
              <p class="font-sans mb-4">
                Beli tiket pesawat untuk tgl 13 Maret 2023 dari Jogja ke
                Jakarta. Pulang tanggal 5 Maret. Segera untuk dipesan. Jangan
                sampai lupa
              </p>
              <div class="mb-4">
                <p>Tanggal Acara :</p>
                <p>Reminder :</p>
                <p>Ringtone :</p>
              </div>
              <div class="mb-4">
                <h5>Pembuat catatan :</h5>
                <div class="flex items-center">
                  <iconPotoIcon />
                  <p class="px-2">Masbro</p>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <label for=""> Upload File</label>
                  <p>File yang support adalah .jpg , .png atau .pdf</p>
                </div>
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
                        <div
                          class="flex items-center justify-between bg-slate-200 border"
                        >
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
              <div>
                <button
                  :disabled="!isButtonDisabled"
                  type="submit"
                  class="mt-8 float-right inline-flex justify-center rounded border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none disabled:bg-slate-500"
                >
                  Selesaikan Catatan
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- ok -->
      </div>
    </div>
    <slot />
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

      // const files = e.target.files
      // for (let i = 0; i < files.length; i++) {
      //   this.generate64(files[i])
      // }
    },

    // generate64(file) {
    //   const reader = new FileReader()
    //   reader.readAsDataURL(file)
    //   reader.onload = () => {
    //     this.files = [...this.files, reader.result]
    //   }
    // },

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
  computed: {
    isButtonDisabled() {
      return this.files.length > 0
    },
  },
  // watch: {
  //   files() {
  //     console.log(this.files)
  //   },
  // },
}
</script>

<style></style>
