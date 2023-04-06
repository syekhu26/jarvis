<template>
  <div>
    <ButtonGlobal @click="isOpen = !isOpen" />
    <div>
      <div
        v-if="isOpen"
        class="fixed inset-0 z-10 overflow-y-auto justify-center items-center overflow-x-hidden px-96"
      >
        <div>
          <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div
          class="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
        >
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Buat Catatan
          </h3>
          <div
            @click="isOpen = false"
            class="w-10 h-10 rounded-full flex absolute top-5 right-5 cursor-pointer"
          >
            <span class="text m-auto text-black"> ❌</span>
          </div>

          <div class="mt-4">
            <form action="" class="w-full">
              <div>
                <label for="subjek" class="mb-2 block text-sm"> Subjek</label>
                <input
                  type="text"
                  name="subjek"
                  placeholder="Masukkan Subjek"
                  required
                  class="border text-black px-4 py-2 w-full mb-3 focus:border-blue-500"
                />
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <label for="deskripsi" class="mb-2 block text-sm"
                    >Tulis Deskripsi
                  </label>
                  <p class="font-sans">{{ tambahAngka }}/100</p>
                </div>
                <textarea
                  v-model="deskripsi"
                  name="deskripsi"
                  placeholder="Masukkan Deskripsi"
                  class="border text-black px-4 py-2 w-full mb-3 focus:border-blue-500"
                />
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm">
                  Pilih Bagian Yang Terlibat</label
                >
                <input
                  type="text"
                  name="email"
                  placeholder="Masukkan Email"
                  required
                  class="border text-black px-4 py-2 w-full mb-3 focus:border-blue-500"
                />
              </div>
              <div class="mb-3 text-blue-600">
                <a href="">Tambah email</a>
              </div>
              <div>
                <label class="mb-2 block text-sm" for="date">
                  Tanggal Acara
                </label>
                <input
                  step="1"
                  name="date"
                  type="date"
                  placeholder="Masukkan Tanggal"
                  class="border text-black px-4 py-2 w-full mb-3 focus:border-blue-500"
                />
              </div>
              <div>
                <label for="remainder" class="mb-2 block text-sm">
                  Pilih Tanggal Remainder</label
                >
                <!-- <input
                  type="text"
                  name="remainder"
                  placeholder="Pilih Tanggal"
                  required
                  class="border text-black px-4 py-2 w-full mb-3"
                /> -->
                <select
                  class="border rounded w-full mb-3 focus:border-blue-500"
                >
                  <option>Pilih Remainder</option>
                  <option>H-2</option>
                  <option>H-4</option>
                  <option>H-6</option>
                </select>
              </div>
              <div>
                <label for="voice" class="mb-2 block text-sm">
                  Pilih Voice Remainder</label
                >
                <input
                  type="text"
                  name="voice"
                  placeholder="Pilih Voice"
                  required
                  class="border text-black px-4 py-2 w-full mb-3 focus:border-blue-500"
                />
              </div>
              <div class="">
                <!-- <div>
                  <button
                    type="button"
                    class="float-left inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    @click="isOpen = false"
                  >
                    Cancel
                  </button>
                </div> -->
                <div>
                  <button
                    type="submit"
                    class="float-right text-base bg-sky-500 text-white font-semibold py-2 px-5 rounded hover:shadow-lg hover:bg-sky-700"
                  >
                    Buat Catatan
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- Subjek
          Tulis Deskripsi
          Pilih Bagian Yang Terlibat
          Tanggal Acara
          Pilih Tanggal Remainder
          Pilih Voice Remainder -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      deskripsi: '',
      remainder: '',
    }
  },

  methods: {
    // closeModal() {
    //   isOpen.value = false
    // },
    // openModal() {
    //   isOpen.value = true
    // },
    // addNewList() {},
  },
  computed: {
    tambahAngka() {
      return this.deskripsi.length
    },
  },
}
</script>
