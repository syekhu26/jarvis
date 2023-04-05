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
                <h1 class="font-bold text-xl">Buat catatan</h1>
                <div class="flex items-center">
                  <a href="" class="p-2">Lihat</a>
                  <button
                    class="my-10 bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-sans block mx-auto hover:bg-sky-700 active:bg-sky-900 focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-800 dark:hover:text-slate-900 dark:hover:bg-slate-100"
                  >
                    Progress 100%
                  </button>
                </div>
              </div>
              <p class="font-sans">
                Beli tiket pesawat untuk tgl 13 Maret 2023 dari Jogja ke
                Jakarta. Pulang tanggal 5 Maret. Segera untuk dipesan. Jangan
                sampai lupa
              </p>
              <div class="mb-4">
                <button
                  class="my-5 bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-sans block hover:bg-sky-700 active:bg-sky-900 focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-800 dark:hover:text-slate-900 dark:hover:bg-slate-100"
                >
                  Kak Lea
                </button>
                <button
                  class="bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-sans block hover:bg-sky-700 active:bg-sky-900 focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-800 dark:hover:text-slate-900 dark:hover:bg-slate-100"
                >
                  Kak Jasmine
                </button>
              </div>
              <div class="mb-4">
                <p>Tanggal Acara :</p>
                <p>Reminder :</p>
              </div>
              <!-- <button
      class="m-8 text-base bg-sky-500 text-white font-semibold py-3 px-8 rounded hover:shadow-lg hover:bg-sky-700"
    >
      Upload File
    </button> -->
              <div>
                <div class="mb-2">
                  <label for=""> Upload File</label>
                </div>
                <img v-if="previewimg" :src="previewimg" alt="" width="200" />
                <input type="file" class="mt-2" @change="upload" />
              </div>
              <div>
                <button
                  type="submit"
                  class="float-right inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- ok -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gambar: '',
      previewimg: ' ',
      isOpen: false,
    }
  },
  methods: {
    upload: function (event) {
      const namagambar = event.target.files[0].name
      this.gambar = namagambar
      this.previewimg = URL.createObjectURL(event.target.files[0])
    },
  },
}
</script>

<style></style>
