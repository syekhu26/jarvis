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
          class="my-8 inline-block w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
        >
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Buat Catatan
          </h3>
          <div
            @click="isOpen = false"
            class="w-10 h-10 rounded-full flex absolute mt-3 top-5 right-5 cursor-pointer"
          >
            <iconSilangIcon />
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
                  class="border text-black px-4 py-2 w-full mb-3 focus:outline-none focus:border-blue-500"
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
                  class="border text-black px-4 py-2 w-full mb-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm">
                  Pilih Bagian Yang Terlibat</label
                >
              </div>
              <div class="relative text-gray-600 border">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <iconInviteIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  v-model="input"
                  class="py-2 border text-black pl-10 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Email"
                  required
                />
              </div>

              <div>
                <div>
                  <div
                    v-for="item in items"
                    :key="item"
                    class="bg-slate-200 rounded mb-2 px-2 flex items-center"
                  >
                    {{ item }}
                    <div>
                      <button
                        v-if="item"
                        class="ml-2 mt-2"
                        type="button"
                        @click="remove"
                        title="Remove"
                      >
                        <iconSilangIcon class="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                @click="addEmail"
                class="flex items-center mt-2 mb-3 text-blue-600 cursor-pointer"
              >
                <iconPlusIcon />
                <span class="px-1">Tambah email</span>
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
                  class="border text-black px-4 py-2 w-full mb-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label for="remainder" class="mb-2 block text-sm">
                  Tambahkan Pengingat</label
                >
                <!-- <select
                  v-model="remainder"
                  placeholder="Pilih Reminder"
                  class="border rounded w-full mb-3 focus:outline-none focus:border-blue-500 h-12"
                >
                  <option>Pilih Reminder</option>
                  <option>H-2</option>
                  <option>H-4</option>
                  <option>H-6</option>
                </select> -->
              </div>

              <div>
                <div
                  v-for="deadline in deadlines"
                  :key="deadline"
                  class="bg-slate-200 rounded mb-2 px-2 flex items-center"
                >
                  {{ deadline }}
                  <div>
                    <button
                      v-if="deadline"
                      class="ml-2 mt-2"
                      type="button"
                      @click="removeDeadlines"
                      title="Remove"
                    >
                      <iconSilangIcon class="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div
                @click="addReminder"
                class="flex items-center mb-3 text-blue-600 cursor-pointer"
              >
                <iconPlusIcon />
                <span class="px-1">Tambah reminder</span>
              </div>
              <div>
                <label class="mb-2 block text-sm" for="date">
                  Pilih Waktu
                </label>
                <div class="flex items-center">
                  <input
                    step="1"
                    name="waktu"
                    type="time-local"
                    placeholder="Jam : Menit"
                    class="border text-black px-4 py-2 w-full mb-3 focus:outline-none focus:border-blue-500"
                  />
                  <select class="border h-11 -mt-3">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>

              <!-- <div>
                <vue-timepicker
                  input-width="w-4"
                  placeholder="jam:menit"
                ></vue-timepicker>
              </div> -->

              <div>
                <label for="voice" class="mb-2 block text-sm">
                  Pilih Voice Reminder</label
                >
                <input
                  type="text"
                  name="voice"
                  placeholder="Pilih Voice"
                  required
                  class="border text-black px-4 py-2 w-full mb-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div class="">
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
// import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
// import 'vue2-timepicker/dist/VueTimepicker.css'
export default {
  // components: { VueTimepicker },
  data() {
    return {
      isOpen: false,
      deskripsi: '',
      input: '',
      items: [''],
      remainder: '',
      deadlines: [''],
      // seting: [
      //   {
      //     'jam:menit': {
      //       HH: '',
      //       mm: '',
      //     },
      //   },
      // ],
    }
  },

  methods: {
    addEmail() {
      if (!this.input) {
        return
      }
      this.items.push(this.input)
      this.input = ''
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    removeDeadline(i) {
      this.deadlines.splice(i, 1)
    },
    addReminder() {
      if (!this.remainder) {
        return
      }
      this.deadlines.push(this.remainder)
      this.remainder = ''
    },
  },
  computed: {
    tambahAngka() {
      return this.deskripsi.length
    },
  },
}
</script>
