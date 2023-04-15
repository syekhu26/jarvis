<template>
  <div>
    <ButtonGlobal @click="isOpen = !isOpen" />
    <div>
      <div class="">
        <div
          v-if="isOpen"
          class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden"
        >
          <div class="mt-10 my-10">
            <div
              class="bg-white max-w-2xl w-full rounded p-6 mx-auto shadow-lg"
            >
              <!-- fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center -->
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Buat Catatan
                </h3>
                <div
                  @click="isOpen = false"
                  class="w-10 h-10 rounded-full flex mt-3 top-5 right-5 cursor-pointer"
                >
                  <iconSilangIcon />
                </div>
              </div>

              <div class="mt-4">
                <form action="" class="w-full">
                  <div>
                    <label for="subjek" class="mb-2 block text-sm">
                      Subjek</label
                    >
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
                    <span
                      class="absolute inset-y-0 left-0 flex items-center pl-2"
                    >
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
                    <!-- <div>
                      <div
                        @click="toggletgl = !toggletgl"
                        class="border-2 w-10 h-10 w-full focus:outline-none focus:border-blue-500 mb-3"
                        contentEditable="true"
                        placeholder="yyyy-mm-d"
                      >
                    
                      </div>
                    </div> -->
                    <div
                      class="mt-2 px-2 border-2 w-10 h-10 w-full focus:outline-none focus:border-blue-500 mb-3"
                    >
                      <div class="flex item-center">
                        <iconKalenderIcon class="mt-3" />
                        <!-- <div v-if="date" class="px-4">
                            {{ getTime }}
                          </div> -->
                        <div>
                          <datetime
                            class="mt-2 px-4"
                            type="datetime"
                            v-model="date"
                            placeholder="yyyy-mm-d"
                          ></datetime>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label for="remainder" class="mb-2 block text-sm">
                      Tambahkan Pengingat</label
                    >

                    <div
                      class="mt-2 px-2 border-2 w-10 h-10 w-full focus:outline-none focus:border-blue-500 mb-3"
                    >
                      <div class="flex item-center">
                        <iconAlarmIcon class="mt-3" />
                        <!-- <div v-if="date" class="px-4">
                            {{ getTime }}
                          </div> -->

                        <!-- <datetime
                              class="mt-2 px-4"
                              type="datetime"
                              v-model="remainder[remainder.length]"
                              placeholder="Pilih Waktu Remainder"
                            ></datetime> -->
                        <datetime
                          type="datetime"
                          v-model="datetime"
                          class="mt-2 px-4"
                          placeholder="Pilih Waktu Remainder"
                        ></datetime>
                      </div>
                    </div>
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
                    @click="addRemainder"
                    class="flex items-center mb-3 text-blue-600 cursor-pointer"
                  >
                    <iconPlusIcon />
                    <span class="px-1">Tambah reminder</span>
                  </div>
                  <div>
                    <label class="mb-2 block text-sm" for="date">
                      Pilih pengingat ulangan
                    </label>
                    <div>
                      <select
                        class="border w-full h-10 mb-3 focus:border-blue-500"
                      >
                        <option>Tidak Diulang</option>
                        <option>Ulangi</option>
                        <option>Tidak Tahu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label for="voice" class="mb-2 block text-sm">
                      Pilih Voice Reminder</label
                    >
                    <div>
                      <select
                        class="border w-full h-10 mb-3 focus:border-blue-500"
                      >
                        <option>Pilih Ringtone</option>
                        <option>hahahihi</option>
                        <option>aiyaaiya</option>
                        <option>oke</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-10">
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
            </div>
          </div>
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
    // const date = new Date()
    // date.setMinutes(0, 0, 0)
    return {
      isOpen: false,
      deskripsi: '',
      input: '',
      items: [],
      datetime: '',
      deadlines: [],
      // toggle: false,
      // toggletgl: false,
      date: null,
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
    addRemainder() {
      if (!this.datetime) {
        return
      }
      this.deadlines.push(
        this.$moment(this.datetime).format('MMM DD,YYYY hh:mm A')
      )

      this.input = ''
    },
    removeDeadlines(i) {
      this.deadlines.splice(i, 1)
    },
  },
  computed: {
    tambahAngka() {
      return this.deskripsi.length
    },
    // getTime() {
    //   // return this.date.split(' ')
    //   return this.$moment(this.date).format('MMM DD,YYYY hh:mm A')
    // },
    // getAlarm() {
    //   // return this.date.split(' ')
    //   return this.$moment(this.remainder).format('MMM DD,YYYY hh:mm A')
    // },
  },
}
</script>

<style>
.editableDiv2 {
  border-bottom: 1px solid gray;
  outline: none;
  margin-top: 20px;
}
.editableDiv2[contentEditable='true']:empty:before {
  content: attr(placeholder);
}
</style>
